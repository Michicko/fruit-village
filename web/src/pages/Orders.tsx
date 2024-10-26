import { useEffect } from 'react'
import usePersonalPageContext from '../hooks/usePersonalPageContext';

export default function Orders() {
  const { setPageTitle } = usePersonalPageContext();
  
  useEffect(() => {
    setPageTitle("My orders");
  }, [setPageTitle]);

  return (
    <>
       <section className="section section-page">
        <h2 className="sm-heading">My orders</h2>
        <div className="orders">
          
        </div>
      </section>
    </>
  )
}
