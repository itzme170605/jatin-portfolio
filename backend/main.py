from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI()

# Allow requests from localhost
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Backend is running!"}


@app.get("/api/projects")
async def get_projects():
    GITHUB_USERNAME = "itzme170605"
    url = f"https://api.github.com/users/{GITHUB_USERNAME}/repos"
    
    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        response.raise_for_status()

    data = response.json()
    return [
        {
            "id": repo["id"],
            "name": repo["name"],
            "description": repo["description"] or "No description",
            "html_url": repo["html_url"],
        }
        for repo in data
        if not repo["fork"]  # Optional: skip forked repos
    ]
