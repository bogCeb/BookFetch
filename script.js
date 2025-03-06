// document.addEventListener('DOMContentLoaded', (event) => {
//     const container = document.createElement('div');
//     container.style.display = 'flex';
//     container.style.justifyContent = 'space-around';
//     container.style.backgroundColor = 'lightblue'; 
//     container.style.height = '100vh'; 

//     const columns = [
//         {
//             title: 'ID',
//             content: '"mSvwrsvEACAAJ"'
//         },
//         {
//             title: 'KIND',
//             content: '"mSvwrsvEACAAJ"'
//         },
//         {
//             title: 'BODY',
//             content: `
//                 "1.Language"<br>
//                 "2.title"<br>
//                 "3.saleability"<br>
//                 "4.description"<br>
//                 "5.pagecount"<br>
//                 "6.publishedate"<br>
//                 "7.thumbnail"<br>
//                 "8.authors"<br>
//                 "9.country"
//             `
//         }
//     ];

//     columns.forEach(column => {
//         const columnDiv = document.createElement('div');
//         columnDiv.style.border = '1px solid black';
//         columnDiv.style.padding = '10px';
//         columnDiv.style.backgroundColor = '#FFD700'; 
//         columnDiv.style.flex = '1'; 
//         columnDiv.style.display = 'flex';
//         columnDiv.style.flexDirection = 'column';

//         const title = document.createElement('h2');
//         title.style.backgroundColor = '#FF4500'; 
//         title.style.color = 'white';
//         title.style.textAlign = 'center';
//         title.textContent = column.title;

//         const content = document.createElement('div');
//         content.style.backgroundColor = '#0000FF'; 
//         content.style.color = 'white';
//         content.style.padding = '10px';
//         content.style.flex = '1'; 
//         content.innerHTML = column.content;

//         columnDiv.appendChild(title);
//         columnDiv.appendChild(content);
//         container.appendChild(columnDiv);
//     });

//     document.body.appendChild(container);
// });




