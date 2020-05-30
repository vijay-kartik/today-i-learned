import React from "react"
import Layout from "../layouts"
import styles from "../components/articles.module.css"

export function codify({children}) {
  return (<pre className="prettyprint"><code className="language-java">{children}</code></pre>)
}

const content = "this will let user’s local master branch track the master branch on the remote directory. Once this is setup, you can directly push your local changes in master branch to the remote master branch by typing “git push”. If another user is collaborating in this project and wants to get the latest changes into his local machine, then he has to type “git pull <remote directory name>”. If he has only one remote directory then name is optional in that case."
const content2 = "To clone a repository into a local directory, we use - > \“git clone <url> \<local-directory-name>\”"
const content3 = "To see the changes log in a graph format on your terminal, Type ->  “git log —all —decorate —oneline” \n If you want to clone a repository which is gigantic in size, you can use —shallow flag in your git clone command. This gets you the repository cloned but only with some recent changes and not all."
const setupstreamcode = "> git branch —set-upstream-to=origin/master"
const Article = () => {
  return (
    <Layout className={styles.container}>
      <center><div className={styles.container}>
          <p className={styles.heading}><i>GIT CLI concepts</i></p>
          <p>{content}</p>
          <p>{content2}</p>
          <p>{content3}</p>
          <p><pre className="prettyprint"><code className="language-java">{setupstreamcode}</code></pre>
          <br></br>{content}</p>
      </div>
      </center>
      </Layout>
  )
}

export default Article