# Store Card Online

Technical challenge to evaluate the knowledge acquired in the sofka talent zone applying knowledge in the Angular framework, some applied topics: Reactive Forms, Observables, public API consumption.


---

<!-- ABOUT THE PROJECT -->
## About The Project

This store consists of having a deck of Rick and Morty cards, you will find 60 characters with different styles and shapes, all of these cards have 5 units. You can view each of the cards and buy them depending on their value and balance of money in the account, .

- Key frontend and backend concepts
- Angular project in frontend
- Consumption of data API


---

# PROJECT REVIEW:


## Login with google

Login with firebase and google (or with any authentication system).

   <p align="center">
         <img src="https://res.cloudinary.com/adev48/image/upload/v1676400980/Deployments/AtomicCard%20Store/login_md7enu.png" width="100%"> 

   </p>


---

## VIEW INFORMATION:

### Event new window

Event in each button to react to the **click** and redirect to another page with information.

   <p align="center">
         <img src="https://res.cloudinary.com/adev48/image/upload/v1676400883/Deployments/AtomicCard%20Store/userScreen_ddpslx.png" width="100%"> 

   </p>


---

## LIST CARDS:

### Public API consumption: Mapping data and list of cards, details of each card

Detail of each card, making use of **Firebase** to save the information associated with the Api. Inventory management and sale of each card

   <p align="center">
         <img src="https://res.cloudinary.com/adev48/image/upload/v1676400882/Deployments/AtomicCard%20Store/suscribingDocuments_fvn13d.png" width="100%"> 

   </p>


---

## Account To-Up:

### Top-Up limited money for Day: 

Detail of cash added and saved , making use of **Firebase DataBase** to save the information associated with the money.

   <p align="center">
         <img src="https://res.cloudinary.com/adev48/image/upload/v1676400885/Deployments/AtomicCard%20Store/recahrginAccount_txxrnz.png" width="100%"> 

   </p>


---

## FireBase Services:

### Use of firebase authentication and database services

   <p align="center">
      <img src="https://res.cloudinary.com/adev48/image/upload/v1676401440/Deployments/AtomicCard%20Store/firebaseConsole_csynho.png" width="100%"> 

   </p>


---

## Built With

This section contains the platforms that were used for the project.


### Frontend
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)

* [bootstrap](https://getbootstrap.com/)
* [Angular Framework](https://angular.io/)


### Backend
* [Firebase](https://console.firebase.google.com/)

---

### Installation for **FrontEnd Project**

Install each one the pieces of software previously mentioned (Git).


1. Clone the repo

   - HTTPS 

      ```
      $ git clone https://github.com/nqs48/AtomicStoreCards.git
      ```
      
    - SSH
    
      ```
      $ git clone git@github.com:nqs48/AtomicStoreCards.git
      ```

2. Run `npm install` to download necesary the packages
   ```
   $ npm install
   ```
 
 
3. Open the project with VisualStudio Code (In the root proyect directory)

   ```
   $ code .
   ```
   

4. **IMPORTANT** Conflict Version Angular v15 -> https://github.com/angular/angularfire/issues/3290. Fix it Manually at directory:

   ```
   $ cd node_modules/@angular/fire/compat/firestore/interfaces.d.ts
   ```

   <p align="center">
      <img src="https://res.cloudinary.com/adev48/image/upload/v1676434031/Deployments/AtomicCard%20Store/issueAngularv15_iajj7a.png" width="60%"> 
   </p>




4. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`

   ```
   ng serve -o
   ```
   
---



---

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

---

<!-- CONTACT -->
## Collaborators
```
Nestor Quiroga Suarez
Software Development Consultant

```
<p align="center">
<br>
<a href="https://www.linkedin.com/in/nqs48/"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>&nbsp;&nbsp;
<a href="https://api.whatsapp.com/send/?phone=573102095353&text=Hola+Nestea%2C+vi+tu+perfil+de+github+y+me+encanto+el+trabajo+que+haces%21%21&type=phone_number&app_absent=0"><img src="https://img.shields.io/badge/what's app-2d572c?style=for-the-badge&logo=whatsapp" alt="whats app" /></a>&nbsp;&nbsp;
<a href="https://www.instagram.com/nqs48/"><img src="https://img.shields.io/badge/instagram-white?style=for-the-badge&logo=instagram" alt="Instagram"/>&nbsp;&nbsp;
<a href="mailto:nqs48@hotmail.com"><img src="https://img.shields.io/badge/outlook-blue?&style=for-the-badge&logo=microsoft-outlook&logoColor=white" alt="outlook"/></a>
</a>
</p>
<br>
<p align='center'>
  <a href="#top"><img src="https://img.shields.io/badge/Back to Top-black?" alt="back to top"/></a>
</p>
