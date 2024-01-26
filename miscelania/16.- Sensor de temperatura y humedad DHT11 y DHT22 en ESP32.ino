#include "DHTesp.h"
#include <WiFi.h>

int pinDHT = 15;
DHTesp dht;
const char *ssid = "Wokwi-GUEST";
const char *password = "";
const char *host = "192.168.18.17";
const int port = 3000;
const char *url = "/api/v1/vehicles/humidity-temperature";

void setup() {
  Serial.begin(115200);
  dht.setup(pinDHT, DHTesp::DHT22);

  // Conéctate a la red WiFi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Conectando a WiFi...");
  }
  Serial.println("Conectado a WiFi");
}

void loop() {
  TempAndHumidity data = dht.getTempAndHumidity();

  // Envía los datos al backend
  enviarDatosAlBackend(data);

  Serial.println("Temperatura: " + String(data.temperature, 2) + "°C");
  Serial.println("Humedad: " + String(data.humidity, 1) + "%");
  Serial.println("---");
  delay(1000);
}

void enviarDatosAlBackend(TempAndHumidity data) {
  // Crea un objeto WiFiClient
  WiFiClient client;

  // Conecta al servidor HTTP
  if (client.connect(host, port)) {
    // Construye la cadena JSON con los datos
    String datosJSON = "{\"temperatura\":" + String(data.temperature, 2) + ",\"humedad\":" + String(data.humidity, 1) + "}";

    // Envía la solicitud HTTP POST al backend
    client.println("POST " + String(url) + " HTTP/1.1");
    client.println("Host: " + String(host));
    client.println("Content-Type: application/json");
    client.println("Content-Length: " + String(datosJSON.length()));
    client.println();
    client.println(datosJSON);
    delay(10);

    // Lee y muestra la respuesta del servidor
    while (client.available()) {
      String line = client.readStringUntil('\r');
      Serial.print(line);
    }

    // Cierra la conexión
    client.stop();
  } else {
    Serial.println("Error al conectar al backend");
  }
}
