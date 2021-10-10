import React from 'react'
import {
    BooksContent,
    BooksTrail,
    BooksWrapper} from "./Styles";

const PublishedBooks = () => {
    return (
<BooksContent>
      <h1>Nos Livres Publie</h1>
      <BooksTrail>
        <BooksWrapper>
            <h2>Books</h2>
        </BooksWrapper>
    </BooksTrail>
</BooksContent>
    )
}

export default PublishedBooks
