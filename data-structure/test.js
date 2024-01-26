class SurveyAnswerAnalyzer {
  constructor(ipUserAgentHistory = [], initialConfidenceRatio = 100) {
    this.ipUserAgentHistory = ipUserAgentHistory;
    this.confidenceRatio = initialConfidenceRatio;
  }

  reduceConfidenceIfSimilar(ip, userAgent) {
    for (const entry of this.ipUserAgentHistory) {
      if (ip === entry.ip && userAgent === entry.userAgent) {
        this.confidenceRatio -= 15;
        //break;
      }
    }
  }

  evaluateResponseTime(responseTime, questionType) {
    // umbral de velocidad en segundos
    const speedThresholds = {
      CSAT: 2,
      NPS: 2,
      COMMENTBOX: {
        min: 2,
        max: 50,
      },
    };

    const speedThreshold = speedThresholds[questionType] || 2;

    // CSAT - NPS
    if (responseTime < speedThreshold) {
      //
      const total = 30 * (speedThreshold - responseTime);
      this.confidenceRatio -= total;
    }
    // COMMENTBOX
    if (
      questionType === "COMMENTBOX" &&
      responseTime > speedThreshold.max &&
      this.confidenceRatio < 20
    ) {
      this.confidenceRatio = 20;
    }
  }

  analyzeSurveyAnswer({
    ip,
    userAgent,
    atcsat,
    atnps,
    attraceability,
    atcommentBox,
  }) {
    // check if ip and user agent are similar to usersComparationData
    this.reduceConfidenceIfSimilar(ip, userAgent);

    // evaluate response time for modules : csat and nps
    const responseTime = [];
    if (atcsat.hasOwnProperty("value") && atcsat.hasOwnProperty("type")) {
      responseTime.push(atcsat);
    }
    if (atnps.hasOwnProperty("value") && atnps.hasOwnProperty("type")) {
      responseTime.push(atnps);
    }
    if (
      attraceability.hasOwnProperty("value") &&
      attraceability.hasOwnProperty("type")
    ) {
      responseTime.push(attraceability);
    }
    if (
      atcommentBox.hasOwnProperty("value") &&
      atcommentBox.hasOwnProperty("type")
    ) {
      responseTime.push(atcommentBox);
    }

    responseTime.forEach((atmodule) => {
      this.evaluateResponseTime(atmodule.value, atmodule.type);
    });

    if (this.confidenceRatio < 0) {
      this.confidenceRatio = 0;
    }
  }

  getConfidenceRatio() {
    return this.confidenceRatio;
  }
}

// Preparamos data de prueba
// channel === "CROB2" surveRef -> order 1 and remove it
const testData = {
  ip: "192.168.1.19",
  userAgent: "Mozilla/5.afs0",
  atcsat: {
    type: "CSAT",
    value: 1.9,
  },
  atnps: {
    type: "NPS",
    value: 0.5,
  },
  attraceability: {
    type: "TRACEABILITY",
    value: 2,
  },
  atcommentBox: {
    type: "COMMENTBOX",
    value: 49,
  },
  ttc: {
    type: "TTC",
    value: 25,
  },
};

//puntaje inicial de confidencialidad
const surveyRatioConfidence = 100;
//sacamos de DB 100 registros de usuarios
const usersComparationData = [
  {
    ip: "192.168.1.1",
    userAgent: "Mozilla/5.0",
  },
  {
    ip: "192.168.1.1",
    userAgent: "Mozilla/5.0",
  },
  {
    ip: "192.168.1.3",
    userAgent: "Mozilla/3.0",
  },
  {
    ip: "192.168.1.4",
    userAgent: "Mozilla/2.0",
  },
  {
    ip: "192.168.1.5",
    userAgent: "Mozilla/1.0",
  },
];

const analyzer = new SurveyAnswerAnalyzer(
  usersComparationData,
  surveyRatioConfidence
);

analyzer.analyzeSurveyAnswer(testData);

const finalConfidenceRatio = analyzer.getConfidenceRatio();
console.log(`Ratio de confidencialidad: ${finalConfidenceRatio.toFixed(2)}`);

// el resultado va
