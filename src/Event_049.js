import React from "react";


class Eventreact extends React.Component{
    constructor(){
        super();
        this.state = {
            nama : 'rael'
        }
    }
    kirimpesan(nama){
        alert('sending message to ' + nama);
    }

    ubahtulisan(r) {
        r.target.innerHTML = 'Send a message';
    }

    ubahlagi(r){
        r.target.innerHTML = 'Click Me';
    }

    menggantinama(r){
        this.setState({nama : r.target.value})
    }
    render(){
        return(
            <div>
                {/* Event Handling 1 */}
                <button onClick={()=> alert('Heii')}>Rahel Inii</button>

                {/* Event Handling 2 
                memunculkan pesan ketika menekan tombol*/}
                <button onClick={this.kirimpesan.bind(this, 'rael')}>Send a message!</button> 

                {/* Event Handling 3 
                Apabila kita menekan tombol maka akan mengubah tulisan di tombol*/} 
                <button onMouseEnter={(r)=> this.ubahtulisan(r)} onMouseOut={this.ubahlagi.bind(this)}>Tekan Tombol Ini!</button>
                
                {/* Event Handling 4
                Pada bagian ini kita dapat mengubah nama dengan mengisi box pada dokumen */}
                <h1>Hallo : {this.state.nama}</h1>
                <input type={'text'} onChange={this.menggantinama.bind(this)}></input>
            </div>
        ) 
    }
}

export default Eventreact