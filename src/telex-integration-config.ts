export const telexIntegrationConfig = 
{
  "data": {
    "date": {
      "created_at": "2025-02-22",
      "updated_at": "2025-02-22"
    },
    "descriptions": {
      "app_name": "GitLab test integration",
      "app_description": "Simple gitlab tester",
      "app_logo": "https://images.ctfassets.net/xz1dnu24egyd/1hnQd13UBU7n5V0RsJcbP3/769692e40a6d528e334b84f079c1f577/gitlab-logo-100.png",
      "app_url": "https://github.com/mojeedkusimo/te-lex-gitlab-test-repo",
      "background_color": "#fff"
    },
    "is_active": true,
    "integration_type": "interval",
    "integration_category": "DevOps & CI/CD",
    "key_features": [
      "Simulate telex test integration"
    ],
    "author": "Mojeed Kusimo",
    "settings": [
      {
        "label": "channelID",
        "type": "text",
        "required": true,
        "default": "test-channel"
      },
      {
        "label": "interval",
        "type": "text",
        "required": true,
        "default": "* * * * *"
      }
    ],
    "target_url": "https://dqkdml3v-3000.euw.devtunnels.ms/",
    "tick_url": "https://dqkdml3v-3000.euw.devtunnels.ms/"
  }
}