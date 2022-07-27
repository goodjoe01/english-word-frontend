import './App.css';
import Collection from './components/Collection';
import { useEffect, useState } from 'react';
import { ICollection } from './types'
import FormCollection from './components/FormCollection';


function App(): JSX.Element {

  let [collections, setCollections] = useState<Array<ICollection>>([]);

  let api = `http://localhost:3000/collections`

  useEffect(()=>{
    (async function(){
      let data = await fetch(api).then(res=>res.json());
      setCollections(data);
    })();
  }, [api]);

  console.log(collections);
  return (
    <section className="myapp section">
      <div className='myapp-box container is-fullhd'>
        <div className="columns myapp-columns  is-vcentered">
          <div className='column myapp-column is-1 p-0'>
            <aside className="menu is-flex is-justify-content-center mt-3">
              <ul className="menu-list is-flex is-flex-direction-column is-align-items-flex-start">
                <li><i className='bx bx-group'></i></li>
                <li><i className='bx bx-collection' ></i></li>
                <li><i className='bx bx-cog' ></i></li>
                <li><i className='bx bx-log-out-circle'></i></li>
              </ul>
            </aside>
          </div>
          <div className='myapp-content myapp-column column is-9'>
            <div className='myapp-content-header container'>
              <div className="card-content p-3">
                <p className="is-size-4 has-text-weight-semibold">Dashboard</p>
                <p className="is-size-6 has-text-weight-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            {/* COLLECTONS */}
            <div className='myapp-container-collections container'>
              <div className='columns m-2'>
                {
                  collections.map((item, index)=>(
                    <Collection collection ={item} />
                  ))
                }
              <FormCollection/>
              </div>
            </div>
          </div>
          <div className='column myapp-column is-2'>B
          
          </div>
        </div>
      </div>
  </section>
  );
}

export default App;
