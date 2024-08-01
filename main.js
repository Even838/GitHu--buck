
        async function searchRepositories() {
            const searchQuery = document.getElementById('searchInput').value;
            const apiUrl = `https://api.github.com/search/repositories?q=${searchQuery}`;

 try {
  const response = await fetch(apiUrl);
   const data = await response.json();

  const resultsDiv = document.getElementById('results');
     resultsDiv.innerHTML = '';

     data.items.forEach(repo => {
       const repoDiv = document.createElement('div');
            repoDiv.innerHTML = `
             <h3>${repo.name}</h3>
            <p>${repo.description || 'No description available'}</p>
            <a href="${repo.html_url}" target="_blank">View on GitHub</a>
                    `;
                    resultsDiv.appendChild(repoDiv);
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }