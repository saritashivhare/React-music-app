import React from 'react';
import Api from '../Services/Api';
import { SearchOutlined,PlayCircleOutlined} from '@ant-design/icons';
import {Button} from 'antd';


class Home extends React.Component{

      constructor(props)
      {
          super(props)
          this.state={
              artist:'',
              songs:[],
              message:''
          }
          this.searchMusic=this.searchMusic.bind(this);
      }

      searchMusic=(artist_name)=>
      {
          Api.retriveMusic(artist_name)
            .then(
                (res)=>{
                    console.log("Result : ",res.data.results)
                this.setState({songs:res.data.results,message:"Songs fetched successfully"});
                document.getElementById("list").style.visibility="visible";
            })
            .catch((err)=>
                this.setState({message:"Not Available"})
            )

      }
       
      onChange=(e)=>
        this.setState({ [e.target.name]: e.target.value });
       
      render()
      {

              return(  
                   <div class="row">
                       <h1 style={{color:"purple"}} >Search Music</h1><br></br>
                       <PlayCircleOutlined />
                        <p style={{color:'black'}}>{this.state.message}</p>  
                        <center><div className="row g-2">
                                <div class="col-md-3"> 
                                <label class="form-label" >Enter Artist Name</label>
                               </div>
                               <div class="col-md-4"> 
                               <input type="text" name="artist" class="form-control" value={this.state.artist} onChange={this.onChange}/> 
                               </div>
                               <div class="col-md-4"> 
                                  <Button className="btn btn-primary" shape="circle" icon={<SearchOutlined />} style={{width:'200px'}} onClick={() => this.searchMusic(this.state.artist)}>Search</Button>
                               </div>
                            </div> </center>
                       <br></br><br></br>
                          
                       <div id="list" style={{visibility:'hidden',marginLeft:"30px"}}>
                       <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Icon</th>
                            <th>artistName</th>
                            <th>collectionCensoredName</th>
                             <th>collectionExplicitness</th>   
                             <th>collectionHdPrice</th> 
                             <th>collectionId</th> 
                             <th>collectionName</th> 
                             <th>collectionPrice</th> 
                             <th>collectionViewUrl</th> 
                             <th>contentAdvisoryRating</th> 
                             <th>country</th> 
                             <th>currency</th> 
                             <th>feedUrl</th> 
                             <th>genreIds</th> 
                             <th>genres</th> 
                             <th>kind</th> 
                             <th>primaryGenreName</th> 
                             <th>releaseDate</th> 
                             <th>trackCensoredName</th> 
                             <th>trackCount</th> 
                             <th>trackExplicitness</th> 
                             <th>trackHdPrice</th> 
                             <th>trackHdRentalPrice</th> 
                            <th>trackId</th> 
                            <th>trackName</th> 
                            <th>trackPrice</th> 
                            <th>trackRentalPrice</th> 
                            <th>trackViewUrl</th> 
                            <th>wrapperType</th> 
                            </tr>                       
                    </thead>
                    
                    <tbody>
                        {  
                            this.state.songs.map(
                                art =>
                                    <tr>
                                      <td><img src={art.artworkUrl60} alt="icon"></img></td> 
                                        <td >{art.artistName}</td>
                                        <td>{art.collectionCensoredName}</td>
                                        <td>{art.collectionExplicitness}</td>
                                        <td>{art.collectionHdPrice}</td>
                                        <td>{art.collectionId}</td>
                                        <td>{art.collectionName}</td>
                                        <td>{art.collectionPrice}</td>
                                        <td>{art.collectionViewUrl}</td>
                                        <td>{art.contentAdvisoryRating}</td>
                                        <td>{art.country}</td>
                                        <td>{art.currency}</td>
                                        <td>{art.feedUrl}</td>
                                        <td>{art.genreIds}</td>
                                        <td>{art.genres}</td>
                                        <td>{art.kind}</td>
                                        <td>{art.primaryGenreName}</td>
                                        <td>{art.releaseDate}</td>
                                        <td>{art.trackCensoredName}</td>
                                        <td>{art.trackCount}</td>
                                        <td>{art.trackExplicitness}</td>
                                        <td>{art.trackHdPrice}</td>
                                        <td>{art.trackHdRentalPrice}</td>
                                        <td>{art.trackId}</td>
                                        <td>{art.trackName}</td>
                                        <td>{art.trackPrice}</td>
                                        <td>{art.trackRentalPrice}</td>
                                        <td>{art.trackViewUrl}</td>
                                        <td>{art.wrapperType}</td>
                                      
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
                 
                 
                  </div>
              )


      }

}

export default Home;