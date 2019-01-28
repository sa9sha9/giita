# Frontend training
## Training task
- Fork this repository & working on the branch of your name.
- Use React to make an SPA for [Qiita](https://qiita.com/)'s clone site which cover login, posts list, post detail, my page, post edit page, 404 page. Detailed UI Design is uploaded on [Zeplin](https://zpl.io/2Zjw8lL).
- Make PR to the name of your branch on this repository and mention @abe @syo when you finish some part of it. (You can make several PR before you finish this project.)
- DO NOT LOOK AT OTHER PEOPLE’S CODE !!!

## Detailed technical instruction
- Use [create-react-app](https://github.com/facebook/create-react-app) to create the base of the web app. 
	- Init the project with TypeScript support.
	- Eject it with `npm run eject` and feel free to change any build setting during your development.
	- Optimize the output file on production build.
- Use [axios](https://github.com/axios/axios)  to make http requests to [Qiita’s api](https://qiita.com/api/v2/docs). 
	- It is recommended to share one axios instance for all requests.
	- Handle common HTTP status code such as 401, 404, 5xx. Also send an error toast on the UI.
- Use [MobX](https://github.com/mobxjs/mobx) for state management.
	-  `configure({ enforceActions: 'always' })` is required. ([Ref.](https://github.com/mobxjs/mobx/blob/gh-pages/docs/refguide/api.md#configure))  
	- And it is recommended to have at least two stores for domain state and UI state. ([Ref.](https://mobx.js.org/best/store.html))
- Use [styled-components](https://www.styled-components.com/)  for CSS-in-JS. Pay attention to the consistency and reusability on the naming rules and project structure.
- Use [Font Awesome](https://fontawesome.com/start) for the icons.
- Pagination size is 20 posts per page.
- Add progress bar when there’s API request. (UI Design is at the top of each page.) [Ref.](https://github.com/rikmms/progress-bar-4-axios)
- (Optional) Add eslint and stylelint configuration for the project and correct the errors. See also: [1](https://github.com/fourdigit/eslint-config-fourdigit), [2](https://github.com/fourdigit/gulpset/blob/master/.stylelintrc.js)
- (Optional) Improve A11y support for the web app. Try to score 100 in lighthouse.

## Other requirements
- On top page, please display post that has more than 100 stocks. [Ref.](https://help.qiita.com/ja/articles/qiita-search-options)
- Redirection after login:
	- If user press like, stock or follow button in post detail page before login, it should redirect to the post page after login and the pending action should be do automatically instead of pressing the button again.
	- The same operation after user press follow button on user’s profile page.
	- If user press the login button in comment area before login, it should redirect to the post page and scroll to the comment textarea.
- Do not use the `rendered_body` field in the response.

## About OAuth login
- When user press login button, redirect page to [this URL](https://qiita.com/api/v2/oauth/authorize?client_id=9457bcb2bd77021b8b987663b5ad535202b59551&scope=read_qiita%20write_qiita)
- When user finish authorization, the URL will redirect back to URL like: http://localhost:3000/auth?code=xxxxxxxxxx
- Post this code with `client_id` and `client_secret`:
	- URL: `https://qiita.com/api/v2/access_tokens`
	- Payload: 
```
{
	"code": "xxxxxxxxxxxx",
	"client_id": "9457bcb2bd77021b8b987663b5ad535202b59551",
	"client_secret": "6380dae4d07a9dbc63609bafd449e26e63b77bff"
}
```
- Then the token comes in the response. Set it as a bearer token in the request head.

## Something maybe useful
- [GitHub - rexxars/react-markdown: Render Markdown as React components](https://github.com/rexxars/react-markdown)