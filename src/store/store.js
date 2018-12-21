import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		posts: {
			byId: {},
			allIds: [],
			isFetching: false,
		},
		comments: {
			byId: {},
			allIds: [],
			isFetching: false,
		}
	},
	getters: {},
	mutations: {
		requestPosts(state) {
			state.posts = {
				...state.posts,
				isFetching: !state.posts.isFetching
			}
		},
		receivePosts(state, payload) {
			state.posts = {
				...normalizeData(state.posts, payload.posts),
				isFetching: false,
			}
		},
		requestComments(state) {
			state.comments = {
				...state.comments,
				isFetching: !state.comments.isFetching
			}
		},
		receiveComments(state, payload) {
			state.comments = {
				...normalizeData(state.comments, payload.comments),
				isFetching: false,
			}
		}
	},
	actions: {
		async getPosts(context) {
			try {
				const res = await axios.get('http://localhost:8082/api/posts');
				context.commit('receivePosts', {posts: res.data})
			} catch (error) {
				context.commit('requestPosts')
			}
		},
		async getComments(context) {
			try {
				const res = await axios.get('http://localhost:8082/api/comments');
				context.commit('receiveComments', {comments: res.data})
			} catch (error) {
				context.commit('requestComments');
			}
		}
	},
})

function normalizeData(obj, data) {
	let newState = obj;
	for (let element of data) {
		newState.byId[element.id] = element;
		newState.allIds.push(element.id);
	}
	return newState;
}