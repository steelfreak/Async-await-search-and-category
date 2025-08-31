    <h2>${job.title}</h2>
    <div class="job-meta">${job.company} | ${job.location} | ${job.category} | Salary: ${job.salary}</div>
    <div>
      <div class="section-title">Job Description</div>
      <p>${job.description ? job.description : 'No description provided.'}</p>
    </div>
    <div>
      <div class="section-title">Requirements</div>
      <ul>${job.requirements 
        ? job.requirements.split('\n').map(req => `<li>${req}</li>`).join('') 
        : '<li>No requirements listed.</li>'}
      </ul>
    </div>
    <a href="${job.applyLink}" class="apply-button" target="_blank" rel="noopener noreferrer">Apply Now</a>