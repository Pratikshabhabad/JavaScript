const User={
    _email:'prat@com.Ai',
    _pass:'abc',

    get email()
    {
        return this._email.toUpperCase();
    }
,

    set email(val)
    {
        this._email=val
    }
}

const tea=Object.create(User)
console.log(tea.email);