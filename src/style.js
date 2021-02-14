const style = `
:root {
    --primary: red;
    --cardtop: blue; 
    --text: #FFFFFF;
    --cardbackground: white;
  }
html, body {
    max-width: 100% !important;
    overflow-x: hidden !important;
}
body {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.nav-bar {
    background-color: var(--primary);
    width: 100%;
    color: var(--text);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15vh;
}
h1 {
    font-family: Verdana;
    font-size: 30px;
}
p {
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
    font-size: 15px;
    left: 10px;
}
h2 {
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
    font-size: 20px;
    left: 12px;
}
.member-card {
    width: 250px;
    height: 34vh;
    margin-bottom: 5vh;
    background-color: var(--cardbackground);
    box-shadow: 2px 5px 5px black;
    border-top-left-radius: 10px;
}
.card-container {
    position: absolute;
    top: 26vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 60vw;
}
.card-top {
    background-color: var(--cardtop);
    border: 2px solid rgb(228, 174, 76);
    width: 246px;
    border-top-left-radius: 10px;
}
.card-bottom {
    display: flex;
    flex-direction: column;
    align-content: center;
}
`

module.exports = style;