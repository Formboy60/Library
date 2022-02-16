


function easyFilter(selector, array, callback){

    const searchBar = document.querySelector(selector)

    searchBar.addEventListener('keyup', (e) => {
                    const searchString = e.target.value.toLowerCase();    
                    const filteredTitle = array.filter((hub) => {

                        return (
                               hub.toLowerCase().includes(searchString) 
                            );
                        });
                     callback(filteredTitle);
                })
}
