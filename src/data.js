import moment from "moment";

export const data = [
    {
    id: 1,
    name: "Jane",
    age: 21,
    email: "jane@gmail.com",
    gender: "female",
    dob: "2023-01-01",
    program: 'Medical',
    children: 2,
    address: "Once your HTML tag has been created, paste the image url to the src attribute in your HTML code. Then go to Unsplash and select any image of your choice.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
},
    {
    id: 2,
    name: "Jhon",
    age: 25,
    gender: "male",
    children: 0,
    dob: "1995-01-01",
    program: 'Business Administration',
    email: "jhon@gmail.com",
    address: "Once your HTML tag has been created, paste the image url to the src attribute in your HTML code. Then go to Unsplash and select any image of your choice.",
    image: "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
    id: 3,
    name: "Ahmad",
    age: 32,
    gender: "male",
    dob: "1992-01-01",
    program: 'Engineering',
    children: 1,
    email: "ahmad@gmail.com",
    address: "Once your HTML tag has been created, paste the image url to the src attribute in your HTML code. Then go to Unsplash and select any image of your choice.",
    image: "https://plus.unsplash.com/premium_photo-1688497831081-836510928186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
    id: 4,
    name: "Lisa",
    age: 22,
    gender: "female",
    dob: "1998-01-01",
    children: 0,
    program: 'Medical',
    email: "lisa@gmail.com",
    address: "Once your HTML tag has been created, paste the image url to the src attribute in your HTML code. Then go to Unsplash and select any image of your choice.",
    image: "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
    id: 5,
    name: "Clark",
    age: 43,
    gender: "male",
    dob: "1983-01-01",
    children: 1,
    program: 'Business Administration',
    email: "clark@gmail.com",
    address: "Once your HTML tag has been created, paste the image url to the src attribute in your HTML code. Then go to Unsplash and select any image of your choice.",
    image: "https://images.unsplash.com/photo-1619533394727-57d522857f89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
    id: 6,
    name: "Lara Jessie",
    age: 34,
    gender: "female",
    dob: "1984-01-01",
    children: 0,
    program: 'Engineering',
    email: "lara@gmail.com",
    address: "Once your HTML tag has been created, paste the image url to the src attribute in your HTML code. Then go to Unsplash and select any image of your choice.",
    image: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
    id: 7,
    name: "Khan",
    age: 38,
    gender: "male",
    dob: "1988-01-01",
    email: "khan@gmail.com",
    children: 1,
    program: 'Medical',
    address: "Once your HTML tag has been created, paste the image url to the src attribute in your HTML code. Then go to Unsplash and select any image of your choice.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
    id: 8,
    name: "Mia Smith",
    age: 54,
    gender: "female",
    dob: "1974-01-01",
    children: 0,
    program: 'Business Administration',
    email: "mia@gmail.com",
    address: "Once your HTML tag has been created, paste the image url to the src attribute in your HTML code. Then go to Unsplash and select any image of your choice.",
    image: "https://images.unsplash.com/photo-1621786030484-4c855eed6974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
    id: 9,
    name: "Json Stathan",
    age: 39,
    email: "json@gmail.com",
    gender: "male",
    dob: "1989-01-01",
    address: "Once your HTML tag has been created, paste the image url to the src attribute in your HTML code. Then go to Unsplash and select any image of your choice.",
    image: "https://plus.unsplash.com/premium_photo-1664875849419-3dc59ec24433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
    id: 22,
    name: "Kendrea Lord",
    age: 27,
    gender: "female",
    dob: "1997-01-01",
    email: "kendra@gmail.com",
    address: "Once your HTML tag has been created, paste the image url to the src attribute in your HTML code. Then go to Unsplash and select any image of your choice.",
    image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
    id: 11,
    name: "Peter Jhon",
    gender: "male",
    dob: "1990-01-01",
    age: 29,
    email: "peter@gmail.com",
    address: "Once your HTML tag has been created, paste the image url to the src attribute in your HTML code. Then go to Unsplash and select any image of your choice.",
    image: "https://images.unsplash.com/photo-1619603364937-8d7af41ef206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
    id: 12,
    name: "Ava de",
    age: 33,
    email: "ava@gmail.com",
    gender:"female",
    dob: "1983-01-01",
    address: "Once your HTML tag has been created, paste the image url to the src attribute in your HTML code. Then go to Unsplash and select any image of your choice.",
    image: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
    id: 13,
    name: "Nick Jhonas",
    age: 38,
    gender: "male",
    dob: "1988-01-01",
    email: "nick@gmail.com",
    address: "Once your HTML tag has been created, paste the image url to the src attribute in your HTML code. Then go to Unsplash and select any image of your choice.",
    image: "https://images.unsplash.com/photo-1613075677904-c51e3ac10742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
    id: 14,
    name: "Lorean Stathan",
    age: 28,
    email: "lorean@gmail.com",
    gender: "female",
    dob: "1998-01-01",
    address: "Once your HTML tag has been created, paste the image url to the src attribute in your HTML code. Then go to Unsplash and select any image of your choice.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
    id: 15,
    name: "Kebe Jhons",
    age: 56,
    gender: "male",
    dob: "1976-01-01",
    email: "kabe@gmail.com",
    address: "Once your HTML tag has been created, paste the image url to the src attribute in your HTML code. Then go to Unsplash and select any image of your choice.",
    image: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },

]

export const userData = [
    {
        title: "Update your profile",
        form: [
            {
                label: 'Name', type: 'text', name: 'name', placeholder: 'Enter your name', rules : {
                    required: 'Name is required',
                    pattern: { value: /^[a-zA-Z0-9]*$/, message: 'Only alphanumeric characters are allowed' }
                }
            },
            {
                label: 'Email', type: 'text', name: 'email', placeholder: 'Enter your email',
                rules : {
                    required: 'Email is required',
                    pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email format',
                    }
                }
            },
            {
                label: 'Date of Birth', type: 'date', name: 'dob', placeholder: 'Enter your date of birth',
                rules : {
                    required: 'Date of Birth is required',
                    maxDate: new Date(),
                    validate: (value) => {
                        return moment(value, 'YYYY-MM-DD');
                    }
                }
            },
            {
                label: 'Program', type: 'radio', name: 'program', placeholder: 'Select your program', options:[{
                    label: 'Business Administration', value: 'Business Administration',
                }, {label: 'Engineering', value: 'Engineering'}, {label: 'Medical', value: 'Medical'}],
                rules : {
                    required: 'Program is required',
                }
            },
            {
                label: 'Gender', type: 'select', name: 'gender', placeholder: 'Enter your gender',
                rules : {
                    required: 'Gender is required',
                },
                options: [
                    { label: 'Select your gender', value: '' },
                    { label: 'Male', value: 'male' },
                    { label: 'Female', value: 'female' },
                    { label: 'Other', value: 'other' }
                ]
            },
            {
                label: 'Are you Married ?', type: 'checkbox', name: 'status',
            },
            {
                 type: 'input', name: 'children', dependant:{status: true }, placeholder: 'Enter your children', rules : {
                    required: 'Children is required', min: 0, max: 10,
                    pattern: { value: /^[0-9]*$/, message: 'Only numbers are allowed' }
                }
            },
            {
                label: 'Age', type: 'number', name: 'age', placeholder: 'Enter your age',
                rules : {
                    required: 'Age is required between 18 and 100',
                    min: 18, max: 100,
                    pattern: {
                        value: /^[0-9]*$/,
                        message: 'Only numbers are allowed'
                    }
                }
            },
            {
                label: 'Address', type: 'textarea', name: 'address', placeholder: 'Enter your address',
                rules : {
                    required: 'Address is required', min : 20, max: 100

                }
            },
        ]

    }
]