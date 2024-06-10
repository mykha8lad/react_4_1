import './ShakespeareGeneralInformation.css'
import Shakespeare from '../images/Shakespeare.jpg'

export default function ShakespeareGeneralInformation() {
    return (
        <>
            <div className="container">
                <div className="content">
                    <header>
                        <h1 style={{fontWeight: 400}}>William Shakespeare</h1>
                    </header>
                    <hr />
                    <div>
                        <img src={Shakespeare} alt="Shakespeare image" className='shakespeare-image'/>
                        <div className="information">
                            <p><span style={{fontWeight: 700}}>William Shakespeare</span> (in English : William Shakespeare) is an English playwright, actor and poet .</p>
                            <p>He is considered the most significant author in English-language literature and one of the most prominent playwrights in world history. He is often referred to as " England's national poet " and "The Bard of Avon". Shakespeare's surviving works, some co-authored, include 38 plays , 154 sonnets , two long narrative poems and several other poems. His plays have been translated into all major modern languages ​​and performed more often than those of any other playwright.</p>
                            <p>Shakespeare was born and raised in the town of Stratford-upon-Avon . At the age of 18, he married Anne Hathaway, with whom he had three children: Susanna and the twins Hamnet and Judith. Between 1585 and 1592 he began a successful career in London as an actor, writer and co-owner of a theater company called The Lord Chamberlain's Men and later The King's Men . About 1613 he retired to Stratford, where he died three years later. Not many sources have survived about Shakespeare's personal life, and to this day disputes continue over issues such as his appearance, his sexual orientation, his religious views, and the authorship of the works attributed to him.</p>
                            <p>Shakespeare produced most of his works between 1589 and 1613. His early plays were mainly comedies and historical dramas , genres that reached their peak in the late 16th century. Later, until around 1608, he wrote mainly tragedies , including Hamlet , King Lear , Othello and Macbeth , considered to be some of the most significant works in English literature. In the last years of his active writing career, Shakespeare wrote tragicomedies , sometimes called romances, and collaborated with other playwrights.</p>
                            <p>Many of his plays have been published in editions of varying quality and accuracy. In 1623, two of his associates published the so-called The First Folio , a collection of dramatic works that includes 36 of the 38 plays now believed to have been written by Shakespeare.</p>
                            <p>Even during his lifetime, Shakespeare was a respected poet and playwright, but his fame reached its present proportions only in the 19th century. At the time, the Romantics enthusiastically hailed his genius, and the Victorians bowed to him with a reverence that George Bernard Shaw called "bardo-worship." In the 20th century, his works were repeatedly accepted and rediscovered by new currents in theater and art studies. His plays remain popular today and are continuously studied, performed and reinterpreted in different cultural and political contexts around the world.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}