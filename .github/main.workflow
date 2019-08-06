workflow "Build, deploy & push" {
  on = "release"
  resolves = ["Publish"]
}

action "Build" {
  uses = "actions/npm@1.0.0"
  runs = "actions/npm@master"
  args = "install"
}

action "Test" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Build"]
  runs = "actions/npm@master"
  args = "test"
}

action "Tag" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Test"]
  runs = "actions/bin/filter@master"
  args = "tag"
}

action "Publish" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Tag"]
  runs = "actions/npm@master"
  args = "publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}
