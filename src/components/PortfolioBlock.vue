<script>
export default {
  name: "RepoList",

  data() {
    return {
      username: "zhamanko",
      token: "",

      repos: [],
      loading: false,
      error: "",

      q: "",
      language: "",
      languages: [],

      page: 1,
      perPage: 6
    }
  },

  computed: {
    filteredRepos() {
      const qq = this.q.trim().toLowerCase()
      return this.repos.filter(r => {
        if (this.language && r.language !== this.language) return false
        if (!qq) return true
        const name = (r.name || '').toLowerCase()
        const desc = (r.description || '').toLowerCase()
        return name.includes(qq) || desc.includes(qq)
      })
    },

    pages() {
      return Math.max(1, Math.ceil(this.filteredRepos.length / this.perPage))
    },

    paginated() {
      if (this.page > this.pages) this.page = this.pages
      const start = (this.page - 1) * this.perPage
      return this.filteredRepos.slice(start, start + this.perPage)
    }
  },

  methods: {
    async fetchRepos() {
      this.loading = true
      this.error = ""
      try {
        const headers = { "User-Agent": "Portfolio-App" }
        if (this.token) {
          headers["Authorization"] = `token ${this.token}`
          headers["Accept"] = "application/vnd.github.mercy-preview+json"
        }

        const res = await fetch(
          `https://api.github.com/users/${this.username}/repos?per_page=100&sort=updated`,
          { headers }
        )
        if (!res.ok) {
          const text = await res.text()
          throw new Error(`GitHub API error: ${res.status} ${text}`)
        }

        const data = await res.json()
        this.repos = data

        // зібрати мови
        const langs = new Set()
        data.forEach(r => { if (r.language) langs.add(r.language) })
        this.languages = Array.from(langs).sort()
      } catch (err) {
        console.error(err)
        this.error = err.message || "Помилка при отриманні репозиторіїв"
      } finally {
        this.loading = false
      }
    },

    formatDate(iso) {
      try {
        return new Date(iso).toLocaleDateString("uk-UA", { year: "numeric", month: "short", day: "numeric" })
      } catch {
        return iso
      }
    }
  },

  mounted() {
    this.fetchRepos()
  }
}
</script>

<template>

  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute opacity-40 
          top-30 right-10 w-40 h-40 
          sm:top-40 sm:right-20 
          md:top-35 md:right-40 
           lg:right-70
          scale-160 md:scale-200 ld:scale-302 xl:scale-305
          rounded-full bg-indigo-600 blur-3xl">
    </div>
    <div class="absolute opacity-50 
          bottom-30 right-1 w-40 h-40 
          sm:left-20 
          md:bottom-40 md:left-50
          lg:left-20
          scale-180 md:scale-200 ld:scale-302 xl:scale-310 
          rounded-full bg-lime-800 blur-3xl">
    </div>
  </div>

  <div class="space-y-4 lg:mx-30">
    <h1 class="text-center text-3xl my-10"> {{ $t("projectTitile") }}</h1>
    <div v-if="loading" class="text-center py-6">Завантаження...</div>
    <div v-if="error" class="text-red-600">{{ error }}</div>

    <div v-if="!loading && !error" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="repo in paginated" :key="repo.id" class="p-4 rounded-lg border border-white/10 bg-white/2 backdrop-blur-xl">
        <div class="flex items-start justify-between gap-2">
          <a :href="repo.html_url" target="_blank" rel="noopener" class="font-semibold text-lg hover:underline">
            {{ repo.name }}
          </a>
          <div class=" text-gray-400">{{ formatDate(repo.updated_at) }}</div>
        </div>
        <div class="text-sm text-gray-300 mt-2" v-if="repo.description">{{ repo.description }}</div>

        <div class="flex flex-wrap gap-2 mt-3">
          <span v-if="repo.language" class="px-2 py-1 rounded border border-white/10">{{ repo.language }}</span>
          <a v-if="repo.homepage" :href="repo.homepage" target="_blank"
            class="px-2 py-1 rounded border border-white/10 bg-blue-500/15">{{ $t("live") }}</a>
          <span class="px-2 py-1 rounded border border-white/10">★ {{ repo.stargazers_count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input {
  background: rgba(255, 255, 255, 0.03);
  color: inherit;
}

.btn {
  background: rgba(255, 255, 255, 0.02);
  color: inherit;
}
</style>
