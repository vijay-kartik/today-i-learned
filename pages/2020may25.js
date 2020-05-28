import React from "react"
import Layout from "../layouts"

const content = "Git branch —set-upstream-to=origin/master => this will let user’s local master branch track the master branch on the remote directory. Once this is setup, you can directly push your local changes in master branch to the remote master branch by typing “git push”. If another user is collaborating in this project and wants to get the latest changes into his local machine, then he has to type “git pull <remote directory name>”. If he has only one remote directory then name is optional in that case."
const content2 = "To clone a repository into a local directory, we use - > \“git clone <url> \<local-directory-name>\”"
const content3 = "To see the changes log in a graph format on your terminal, Type ->  “git log —all —decorate —oneline” \n If you want to clone a repository which is gigantic in size, you can use —shallow flag in your git clone command. This gets you the repository cloned but only with some recent changes and not all."

const Article = () => {
  return (
    <Layout>
      <div>
          <p className="heading"><i>GIT CLI concepts</i></p>
  <p className="para">
    {content}</p>
  <p className="para">{content2}</p>
  <p className="para">{content3}</p>
          <style jsx>{`
          .heading {
            margin: 0rem 0rem 4rem;
            text-align: center;
            font-size: 28px;
            font-family: 'Fira Sans' sans-serif;
            background: #f8f9fa;
            border-radius: 10px;
          }
          .para {
            font-family: 'Helvetica Neue';
            padding: 0rem 3rem;
          }

          `}</style>
      </div>
      </Layout>
  )
}

export default Article