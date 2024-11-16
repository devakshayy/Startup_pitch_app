import { auth } from "@/auth";
import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home  ({searchParams}:{
    searchParams :Promise<{query?:string}>
}) {
  
  
  const query = (await searchParams).query;
  const params = {search: query || null};

  const session = await auth();

  // console.log(session?.id);
  
  // const posts = await client.fetch(STARTUPS_QUERY);
  const {data:posts} = await sanityFetch({query:STARTUPS_QUERY,params});

  // const posts = [
  //   {
  //     _createdAt: new Date(),
  //     views: 55,
  //     author: {autherId:1,name:'andrian'},
  //     _id: 1,
  //     description: "This is description 1",
  //     image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4",
  //     category: "Robots",
  //     title: "We Robots",
  //   },
  // ]


  return (
  <>
       <section className="pink_container">
       <h1 className="heading">
          Pitch Your Startup, <br/>
          Connect with Entrepreneurs
       </h1>
       <p className="sub-heading !max-w-3xl">
          Submit Ideas,Vote on Pitches, and Get Noticed in Virtual
          Competitions.
       </p>   
       <SearchForm query={query}  />
     </section>
       {/* Card Maping Section */}

       <section className="section_container">
         <p className="text-30-semibold">{query? `Search result for "${query}"` : `All Startup's`}</p>

         <ul className="mt-7 card_grid">
            {posts?.length > 0 ? (
              posts.map((posts:StartupTypeCard,index:number) => (
                 <StartupCard key={posts?._id} posts={posts} />
              ))
            ) : (
              <p className="no-result">No Startups Found</p>
            )}
         </ul>
     </section>
  </>
  );
}
