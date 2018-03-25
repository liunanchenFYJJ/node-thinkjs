'use strict'

export default class extends think.model.base {
    testIn(name, pw) {
        return {
            isSuccess: (name == 'admin' && pw == '123')
        }
    }
}