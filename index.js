let url = "https://jsonplaceholder.typicode.com/users"

const fetchUserData = async () => {
    try {
        const response = await fetch(url);
        const userData = await response.json();
        // console.log(userData);

        const userName = document.getElementById("name-container");
        const userPhone = document.getElementById("phone-container");
        const userCompanyName = document.getElementById("company-name-container");

        userData.forEach((user) => {

            const name = document.createElement("p");
            name.textContent = user.name;
            userName.appendChild(name);

            const phone = document.createElement("p");
            phone.textContent = user.phone;
            userPhone.appendChild(phone);

            const companyName = document.createElement("p");
            companyName.textContent = user.company.name;
            userCompanyName.appendChild(companyName);
        });
        console.log('yea')

    }

    catch (error) {
        console.log(error);
    }
}

fetchUserData();