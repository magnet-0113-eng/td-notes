from http.server import SimpleHTTPRequestHandler, HTTPServer
import os

REPOSITORY_NAME = "td-notes"

os.chdir("docs")

class Handler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        if path.startswith(f"/{REPOSITORY_NAME}/"):
            path = path[len(REPOSITORY_NAME) + 1:]
        return super().translate_path(path)

HTTPServer(("0.0.0.0", 7000), Handler).serve_forever()
