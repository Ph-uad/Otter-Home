import Listing from "../components/layout/listing/Listing";

const ListingPage = () => {
  return (
      <section className="listing section">
          <Listing />
      </section>
  )
}
export default ListingPage;

export async function loader() {
  const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7456400200msh7ebe132b4cc6d0fp1cc549jsne3d80fcbb82f',
        'X-RapidAPI-Host': 'unofficial-redfin.p.rapidapi.com'
      }
    };
  
    const response = await fetch('https://unofficial-redfin.p.rapidapi.com/mortgage/check-rates?locationType=4&locationId=39375&homePrice=2500000&homeValue=400000&loanBalance=320000&percentageDown=20&loanType=purchase&creditScore=760&points=zero&loanTerms=30yr&veteranType=Non-Military', options);
    if(!response.ok){
      //
    }else{
      return response.json()
    }
  
}