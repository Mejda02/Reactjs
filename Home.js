import React,{Component} from 'react';
class Home extends Component {
    render() {
        const {items} = this.props
        
        return(
            <div>
                { items.map((e) => {
                    return (
                        <div key={e.id}>
                            <p>{e.name}</p>
                            <p>{e.age}</p>
                        </div>
                    );
            
                })} 
            </div>
        )
    }
}
export default Home;