// Regular expression for validating email
const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

// Regular expression for validating password
const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    return passwordRegex.test(password);
};

const checkValidData = (formType, name, email, password) => {
    // Validation logic for sign-up form
    if (formType === 'signup') {
        if (name.trim().length < 3) {
            return 'Name is not valid (at least 3 characters)';
        }
    }

    // Common validation for both sign-up and sign-in forms
    if (email.trim().length === 0) {
        return 'Email cannot be empty';
    }
    if (!isValidEmail(email)) {
        return 'Email is not valid';
    }
    if (password.trim().length === 0) {
        return 'Password cannot be empty';
    }
    if (!isValidPassword(password)) {
        return 'Password is not valid (must be 8-20 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character)';
    }

    // If all validations pass, return null (no error)
    return null;
};


export default checkValidData;