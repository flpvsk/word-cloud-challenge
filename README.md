## Word Cloud

Finally something, that *really* dispays topics in a cloud!

Demo: [filipovskii.github.io/word-cloud-challenge][demo]


### Install

    npm install -g gulp
    git clone git@github.com:filipovskii/word-cloud-challenge.git
    cd word-cloud-challenge
    npm install && bower install

### Run

    gulp serve

### Test

    gulp test

### Components Structure

    <TopicCloud>
      <Topic />
      <Topic />
      ...
      <Topic />

      <TopicInfo />
    </TopicCloud>


[demo]: https://filipovskii.github.io/word-cloud-challenge
