workflow "Build, deploy & push" {
  resolves = ["GitHub Action for npm"]
  on = "release"
}

action "GitHub Action for npm" {
  uses = "actions/npm@1.0.0"
  secrets = ["GITHUB_TOKEN", "NPM_AUTH_TOKEN"]
}
