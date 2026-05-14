from http.server import SimpleHTTPRequestHandler, HTTPServer
import os

REPOSITORY_NAME = "td-notes"

os.chdir("docs")

class Handler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        if path.startswith(f"/{REPOSITORY_NAME}/"):
            path = path[len(REPOSITORY_NAME) + 1:]
        return super().translate_path(path)

addr = ("0.0.0.0", 7000)

server = HTTPServer(addr, Handler)

try:
    print(f"Server started.", addr)
    server.serve_forever()
except KeyboardInterrupt:
    print("\nServer stopped.")
finally:
    server.server_close()
