class Telephone {
    constructor() {
        this.phoneNumbers = [];
        this.observers = [];
    }

// To add a phone number 
    AddPhoneNumber(phoneNumber) {
        this.phoneNumbers.push(phoneNumber);
    }

// Removing a phone number
    RemovePhoneNumber(phoneNumber) {
        this.phoneNumbers = this.phoneNumbers.filter(num => num !==phoneNumber);
    }

// Dial a phone number
    DialPhoneNumber(phoneNumber) {
       if (this.phoneNumbers.includes(phoneNumber)) {
        this.notify(phoneNumber);
       }
       else {
        console.log('Invalid: Please add the number before dialling.')
       }
    }


// To add an observer
add(observer) {
    this.observers.push(observer);
}

// To remove observer
remove(observer) {
   this.observers = this.observers.filter(obs => obs !== observer);
}

// Notify observers
notify(phoneNumber) {
    this.observers.forEach(observer => { 
        observer.update(phoneNumber); });
}
}

class Observer {
    constructor() {
    }
    update(phoneNumber) {
        console.log("The phone number is " + phoneNumber);
    }
}

class Observer2 {
    constructor() {}
    update(phoneNumber) {
        console.log("Now dialling " + phoneNumber);
    }
}

const tel = new Telephone();

tel.AddPhoneNumber("2347012405820");

const observer = new Observer();
tel.add(observer);

const observer2 = new Observer2();
tel.add(observer2);

tel.notify("2347012405820");


