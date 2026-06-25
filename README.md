# coolify-gchat-proxy

A minimal webhook proxy that forwards [Coolify](https://coolify.io) notifications to Google Chat.

Coolify sends a custom JSON payload that Google Chat does not understand. This service receives the Coolify webhook and reformats it into the `{"text": "..."}` format that Google Chat expects.

## How it works

```
Coolify → POST /  →  proxy  →  POST Google Chat webhook
```

## Setup

### Environment variables

| Variable | Description |
|---|---|
| `GOOGLE_CHAT_WEBHOOK` | Full Google Chat webhook URL |

### Deploy on Coolify

1. Point Coolify to this repo, build pack: **Dockerfile**
2. Set `GOOGLE_CHAT_WEBHOOK` in environment variables
3. Expose a host port (e.g. `5675:3000`) under Network → Ports
4. In Coolify → Settings → Notifications → Webhook URL, set `http://<server-public-ip>:5675`

## Message format

```
[event] message
url
```

Example:
```
[deployment] Deployment of my-app finished successfully.
http://coolify.example.com
```
