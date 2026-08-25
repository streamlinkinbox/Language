#!/usr/bin/env python3
"""Dev server for Hikaya — serves with no-cache headers so updates always show."""
import http.server

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, must-revalidate")
        super().end_headers()

if __name__ == "__main__":
    http.server.ThreadingHTTPServer(("0.0.0.0", 8080), NoCacheHandler).serve_forever()
