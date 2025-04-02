import { render, screen } from "@testing-library/react"
import App from "../src/App"
import { expect, test } from "vitest"




//getBy, queryBy, findBy 
//getByAll, queryByAll, findByAll

test.for(["yo", "woah", "justin", "snow"])("Testing hour heading in our webpage", (word)=>{
    //Arrange
    render(<App />)

   const header =  screen.getByRole('heading', {
        name: /justin/i
      })


    
    //Act
    
      


    //Assert
    expect(header).toHaveTextContent("justin");

    
})