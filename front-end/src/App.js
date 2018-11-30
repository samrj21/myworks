import React, { Component } from 'react';

import './App.css';





class App extends Component {

  constructor(){
    super();
    this.state={
    
      file: null,
    }
   

    }

    onSelect =(e) => {
     this.setState({file: e.target.files[0]});
      console.log(e.target.files[0])
    }

  
    onsubmit (file) {
      
      var CLOUDINARY_UPLOAD_URL= "https://api.cloudinary.com/v1_1/mywork3223/image/upload"
     
      var CLOUDINARY_UPLOAD_PRESET = 'xhhwdg7x'
      
      const formData = new FormData();
      formData.append("file", this.state.file);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET); // Replace the preset name with your own
  
      fetch(CLOUDINARY_UPLOAD_URL, {
        method: 'POST',
        body: formData
      })
      
      .then(response => response.json())
      .then(data => {
        if (data.secure_url !== '') {
          const imgdata = {file:data.secure_url}
    
          fetch('http://localhost:7000/api/upload', {
            method:'POST',
headers:{
'Content-Type': 'application/json',
},
          body: 
          JSON.stringify(imgdata)
        
        })
          console.log(data.secure_url);
          this.setState({
            Url: data.secure_url
          });
        }
      })
      .catch(err => console.error(err))
  }


  render() {
    return (
      <div >
        
        <h1>File Upload</h1>
              
        <input type="file" name="image" onChange={this.onSelect} />
              
    <button onClick={this.onsubmit.bind(this)}>Submit</button>
    <div  >


    <img src={this.state.Url} alt="img" height="100px" width="200px" />
</div>
      </div>
    );
  }
}

export default App;
