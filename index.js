const section = document.getElementsByTagName("section");
const body = document.getElementsByTagName("body");
const usersCard = document.getElementById("users-sec");
const cardsSection = document.getElementsByTagName("section")[0];
// მოდალის გლობალ ცვლადები
const modalBackground = document.createElement("div");
const modalWindow = document.createElement("section");

// მთავარ გვერდზე დამაბრუნებელი ღილაკი
const mainbackBtn = document
  .getElementById("back-btn")
  .addEventListener("click", () => window.history.back());

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((result) =>
    result.map((user) => {
      // მომხმარებლის ბარათების შექმნა
      const cardsDiv = document.createElement("div");
      cardsDiv.setAttribute("id", "user-card");
      cardsDiv.classList.add("user-card");
      cardsSection.appendChild(cardsDiv);

      // პროფილის სურათი
      const profilePic = document.createElement("img");
      profilePic.setAttribute("class", "profile-img");
      profilePic.src =
        "https://icons.iconarchive.com/icons/dario-arnaez/genesis-3G/256/User-Files-icon.png";
      cardsDiv.append(profilePic);

      // სახელი და გვარი
      const nickName = document.createElement("h3");
      nickName.append(user.name);
      cardsDiv.append(nickName);

      // მცირე ინფორმაცია (საიტის და კომპანიის შესახებ)
      const littleInfo = document.createElement("p");
      littleInfo.append(user.website, " | ", user.company.name);
      littleInfo.classList.add("little-info");
      cardsDiv.append(littleInfo);

      // კომპანიის საქმიანობაზე და საფირმო ფრაზა
      const littleInfo2 = document.createElement("p");
      littleInfo2.append(" | ", user.company.bs, " | ");
      littleInfo2.classList.add("little-info2");
      cardsDiv.append(littleInfo2);
      const littleInfo3 = document.createElement("p");
      littleInfo3.classList.add("little-info3");
      littleInfo3.append(user.company.catchPhrase);
      cardsDiv.append(littleInfo3);

      // ლინკები
      const linksDiv = document.createElement("div");
      linksDiv.classList.add("profile-links");
      linksDiv.innerHTML = `<img src="https://icons.iconarchive.com/icons/danleech/simple/256/facebook-icon.png"> 
      <img src="https://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png">
      <img src="https://icons.iconarchive.com/icons/hopstarter/social-bookmark/64/Linked-In-icon.png">`;
      cardsDiv.append(linksDiv);

      // მოდალი
      const handleModalDiv = () => {
        modalWindow.setAttribute("class", "modal-window");
        modalBackground.setAttribute("class", "modal-background");
        modalWindow.innerHTML = `
           <h2>${user.name}</h2>
           <p>Email: ${user.email}</p>
           <p>Phone: ${user.phone}</p>
         `;
        modalBackground.append(modalWindow);
        usersCard.append(modalBackground);

        // დასახური ღილაკი
        const closeModalButton = document.createElement("button");
        modalWindow.append(closeModalButton);
        closeModalButton.append("Close");
        closeModalButton.setAttribute("id", "close-modal");
        closeModalButton.addEventListener("click", () => {
          location.reload();
        });
      };
      usersCard.addEventListener("click", handleModalDiv);
    })
  );

// რაღაც მიზეზის გამო მოდალში მხოლოდ ერთი მომხმარებლის ინფორმაცია გამოდის
//  არ ვიცი როგორ მოხდა მაგრამ ეტყობა დაღლილი რო ვიყავი მომხმარებლის
//  ბარათის მაგივრად ივენთ ლისენერი რომელიც უნდა ედოს ბარათებს უშუალოდ
//  ადევს სექციას შეიძლება მაგის ბრალი იყოს რო ერთი მომხმარებლის ინფორმაცია
//  გამოდის მხოლოდ ბოლო მომხმარებლის. მე მახსოვდა რო ბარათებს ვადებდი და
//  წესით ასეც უნდა იყოს მაგრამ ბარათების მაგივრად ზემოთ გლობალურ
//  ცვლადებში დაიმპორტებულია ბარათების სექცია გასწორება ვცადე შევცვალე
//  სექციის აიდი ბარათების აიდით მაგრამ ერორი ამოაგდო და საერთოდ
// აღარ მუშაობდა ამიტომ ისევ ესე დავტოვე:(