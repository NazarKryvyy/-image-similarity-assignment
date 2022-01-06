
Run `npm install` then `npm run start:dev` to run nodemon and check CLI for logs. 


# Image similarity

When a user posts on Candide, we might assume that they would be interested in posts similar to theirs, or at least referring to similar content. One way to do this might be to find other posts with similar images to theirs.

We have made 20 plant images available (check the source code). We have also provided a dataset of labels from the Google Cloud Vision API for those images (see `data.json`), which could help, although its use is not a requirement.

## The task

If I were to post any one of the 20 images, which of the other 19 would be relevant to show to me as "other posts like yours"?

We want you to write an algorithm that uses the data we provide to figure out which images are most similar.

## Guidance

This task doesn't necessarily reflect the day-to-day development we do at Candide. It does, however, provide us an opportunity to see how you:

- approach ambiguous, arbitrarily complex problems
- communicate
- write code

There is certainly no right or wrong answer to this. Yours may not be the most efficient or scalable solution, but you should understand its strengths and weaknesses. We don't expect production quality, but be prepared to justify any compromises.

Feel free to ask questions, but the exercise is intentionally left vague. We want to give you the freedom to make your own decisions.

Please keep in mind that reviewers only have a limited amount of time to review this submission. Anything you can do to make this process easier will be appreciated. It might be safe to assume that not everyone on the team will be familiar with your chosen solution.

We value your time, and don't expect you to spend more than a few hours on this. For the sake of fairness, if you do choose spend longer than this we can't guarantee it will affect our decision.

We know it can be tough to find a few spare hours, so take your time. That said, if you think it will take longer than a week to get back to us, please let us know.

We look forward to seeing what you come up with!
