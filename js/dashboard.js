var url = [];
url['prod'] = 'https://sclub.agmsoft.org/m8/';
url['test1'] = 'https://agm-test.agmsoft.org/m8/';
url['test2'] = 'https://agm-test2.agmsoft.org/m8/';
url['test3'] = 'https://agm-test3.agmsoft.org/m8/';
url['jira'] = 'https://jira.agmsoft.org/';
url['confl'] = 'https://confluence.agmsoft.org/';
url['jenkins'] = 'https://jenkins.agmservice.com/';
document.getElementsByTagName('body')[0].innerHTML = '<body> \
	<style> \
		div.dev-links { \
			list-style: none; \
			padding: 0; \
			margin: 20px auto; \
			text-align: left; \
			max-width: 900px; \
			display: flex; \
			flex-direction: row; \
			flex-wrap: wrap; \
			justify-content: space-around; \
			align-content: flex-start; \
			align-items: center; \
		} \
		div.dev-links a { \
			list-style: none; \
			border-radius:5px; \
			padding: 10px; \
			margin: 0; \
			background: #F7F7F7; \
			width: 100px; \
			height: 100px; \
			display: block; \
			color: #4285F4; \
			font-size: 16px; \
			text-align: center; \
			vertical-align: middle; \
			line-height: 100px; \
		} \
		div.dev-links a:hover { \
			background: #eee; \
		} \
	</style> \
	<div class="dev-links"> \
		<a href="'+url['prod']+'">Production</a> \
		<a href="'+url['jira']+'">Jira</a> \
		<a href="'+url['confl']+'">Confluence</a> \
		<a href="'+url['jenkins']+'">Jenkins</a> \
		<a href="'+url['test1']+'">Test 1</a> \
		<a href="'+url['test2']+'">Test 2</a> \
		<a href="'+url['test3']+'">Test 3</a> \
	</div> \
</body>';