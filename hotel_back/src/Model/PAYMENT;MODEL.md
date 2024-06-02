# Payment method explanation

When processing payments using an external service like Square, the internal state (our model) and the external state (square’s model) must be synchronized. With how many issues that can arise during its cycle (the payment processing server breaks during request, or internal server breaks while processing response from payment processing server), the payment process needs to be consistent. The way this is achieved is by implementing multi-phase commits. Multi-phase commits are where we step through the process in phases, rollback changes on error, or completely and consistently alter the state of the models on success. For our process, we will be using the following model:


![Screenshot from 2024-06-02 12-56-35](https://github.com/eu-waliston/Tokyo-Hotel/assets/82295321/5979f03c-1098-42d3-b48f-161405e82c27)



In our prepare phase, we will make sure an identical payment (same author and title) has not been started (pending or done). During our process phase, we will make a external Square request to process the user’s payment. On success, we will reach our update model phase where we create an article and update the payment status in a multi-step transaction to ensure consistency. Once finished, the status will be set to done. If at any point an error is encountered, the payment state will be set to ‘error’, the process aborts, and the database reverts back to an earlier state. In the code, we keep track of the payment states in the payment model’s status property.
