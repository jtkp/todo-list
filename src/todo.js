
// use class/prototyping so that all of the functions of the same class
// refer to the same prototype, using less memory than a factory function

// factory functions are more used for one-off objects
class todo {
    // #privateVar = 0;
    constructor(title, description, dueDate, priority) {
        // this.#privateVar = 1;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

};

export {
    todo,
};