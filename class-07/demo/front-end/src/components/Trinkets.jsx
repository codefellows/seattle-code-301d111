function Trinkets(props) {
    return (
      <section>
       <ul>
         {
           props.trinkets.map((trinket, index) =>
             <li key={index}>{trinket.name} - {trinket.color}</li>
           )
         }
       </ul>
     </section>
    );
}

export default Trinkets;
