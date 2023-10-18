from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}


@app.get("/test/awsome")
async def say_sex():
    users = []
    for x in range(10):
        users.append(x)
    try:
        return users
    except:
        return {"error": "aprendiendo ps chamo"}

