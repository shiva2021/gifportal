<template>
	<div class="app">
		<div class="container mb-4 mt-4">
			<Home msg="🖼 GIF Portal on Vue3"/>
			<br/>
			<Gifs />
		</div>
	<nav :class="`navbar is-fixed-bottom has-background-black-light`">
			<div class="is-flex is-justify-content-center is-flex is-align-content-center">
					<!-- <div>
							<p class="has-text-white">
								built on
								<a class="has-text-white"
								:href="TWITTER_LINK"
								target="_blank"
								rel="noreferrer"
							>
							{{TWITTER_HANDLE}}
							</a>
							with ❤️
							</p>
							<p class="has-text-white">
								{{personalMsg}}
								<a
									class="has-text-white"
									:href="contact"
									target="_blank"
									rel="noreferrer"
								>
									{{clickhere}}
								</a>
								{{personalMsg2}}
							</p>
					</div> -->
				<div>
					<div class='is-flex is-align-content-center is-justify-content-center'>
							<p class="has-text-white">
								built on
								<a class="has-text-white"
								:href="TWITTER_LINK"
								target="_blank"
								rel="noreferrer"
							>
							{{TWITTER_HANDLE}}
							</a>
							with ❤️
							</p>
					</div>
					<div class='is-flex is-align-content-center is-justify-content-center'>
							<p class="has-text-white">
								{{personalMsg}}
								<a
									class="has-text-white"
									:href="contact"
									target="_blank"
									rel="noreferrer"
								>
									{{clickhere}}
								</a>
								{{personalMsg2}}
							</p>
					</div>
			</div>
		</div>
	</nav>
	</div>
</template>
<script setup>
import Home from './components/Home.vue'
import store from './store';
import {provide} from 'vue';
import Gifs from './components/Gifs.vue'
provide('store', store)

const TWITTER_HANDLE =  "_buildspace";
const TWITTER_LINK= `https://twitter.com/${TWITTER_HANDLE}`;
const contact = "https://twitter.com/shivang_91";
const personalMsg = "Hey, why don't you visit my profile?"
const clickhere = "Click here!"
const personalMsg2 = "If you follow me, even better!"
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.App {
  height: 100vh;
  background-color: #1a202c;
  overflow: scroll;
  text-align: center;
}

.authed-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
}

.header {
  margin: 0;
  font-size: 50px;
  font-weight: bold;
  color: white;
}

.sub-text {
  font-size: 25px;
  color: white;
}

.gradient-text {
  background: -webkit-linear-gradient(left, #60c657 30%, #35aee2 60%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cta-button {
  height: 45px;
  border: 0;
  width: auto;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: white;
}

.connect-wallet-button {
  background: -webkit-linear-gradient(left, #60c657, #35aee2);
  background-size: 200% 200%;
  animation: gradient-animation 4s ease infinite;
}

.submit-gif-button {
  background: -webkit-linear-gradient(left, #4e44ce, #35aee2);
  background-size: 200% 200%;
  animation: gradient-animation 4s ease infinite;
  margin-left: 10px;
}

.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  width: 100%;
	position:fixed;
  bottom: 0;
  left: 0;
  padding-bottom: 45px;
}

.twitter-logo {
  width: 35px;
  height: 35px;
}

.footer-text {
  color: white;
  font-size: 16px;
  font-weight: bold;
}

.gif-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 1.5rem;
  justify-items: center;
  margin: 0;
  padding: 0;
}

.gif-grid .gif-item {
  display: flex;
  flex-direction: column;
  position: relative;
  justify-self: center;
  align-self: center;
}

.gif-item img {
  width: 100%;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
}

.connected-container input[type='text'] {
  display: inline-block;
  color: white;
  padding: 10px;
  width: 50%;
  height: 60px;
  font-size: 16px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10px;
  margin: 50px auto;
}

.connected-container button {
  height: 50px;
}

.has-background-black-light{
  background-color: #1a202c !important;
}
</style>