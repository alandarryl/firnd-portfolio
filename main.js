

// let projet =[
//     {
//         id : '1',
//         projectImage: './images/category-1.jpg',
//         title: 'project lola',
//         description: 'project concerning blablabla',
//     },
//     {
//         id : '1',
//         projectImage: './images/category-2.jpg',
//         title: 'project lola',
//         description: 'project concerning blablabla',
//     },
//     {
//         id : '1',
//         projectImage: './images/category-3.jpg',
//         title: 'project lola',
//         description: 'project concerning blablabla',
//     },
//     {
//         id : '1',
//         projectImage: './images/category-4.jpg',
//         title: 'project lola',
//         description: 'project concerning blablabla',
//     }
// ]



let tablLinks = document.getElementsByClassName('tab-links');
let tabContents = document.getElementsByClassName('tab-contents');


    function openTab(tabname){
        for(let tablLink of tablLinks){
            tablLink.classList.remove("active-link");
        }
        for(let tabContent of tabContents){
            tabContent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }



    let sidemenu = document.getElementById("sidemenu");

    function openMenu(){
        sidemenu.style.right = "0";
    }

    function closeMenu(){
        sidemenu.style.right = "-200px";
    }
