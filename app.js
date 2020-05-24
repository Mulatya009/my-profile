document.getElementById('btn').addEventListener('click', ajaxCall);

function ajaxCall() {    
    // create an XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // open connection
    xhr.open('GET', 'skills/back-end.json', true);

    // execution of the ajax call
    xhr.onload = function () {
        if (this.status === 200) {
            const resp = JSON.parse(this.responseText)
            console.log(resp);
        }

    }
    xhr.send();    
}

document.addEventListener('DOMContentLoaded', load);

function load() {
    
    async function fetchProfile() {
        const response = await fetch('projects/my-projects.json');
        const help = await response.json()

        return {
            help
        }
    }
    fetchProfile()
        .then(help => {
            console.log(help.help);

            let doc = document.getElementById('img');
            let wrapper = document.createElement('div');
            help.help.forEach(project => {
                wrapper = `
                    <div>
                        <img src="${project.image}" style="height: 300px; width: 388px;" alt="image">
                    </div>
                `; 
                doc.insertAdjacentHTML("beforeend", wrapper)          
            });
        })
        .catch(error => { console.log(error) });

}



