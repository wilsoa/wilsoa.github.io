---
layout: default
title: Jump Start Commander
---

{% assign wlogo = '<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMDAgMTAwJz48ZyBmaWxsPSdub25lJz48Y2lyY2xlIGZpbGw9JyNGOEY2RDgnIGN4PSc1MCcgY3k9JzUwJyByPSc1MCcvPjxwYXRoIGQ9J005Ny42OTEgNTcuMDY0Yy02LjU2MS0zLjY5OS0xMC43NjgtNS41NTEtMTIuNjE3LTUuNTUxLTEuMzQ0IDAtMi4zOTUgMS4wMzItMy4xNTQgMy4wOTItLjc1OCAyLjA2My0yLjI3IDMuMDktNC41NDEgMy4wOS0uOTI2IDAtMi44MTgtLjMzNi01LjY3OC0xLjAwOC0xLjU5OCAyLjQ0LTIuMzk4IDMuOTk2LTIuMzk4IDQuNjY4IDAgLjkyNi42ODkgMi4wMTYgMi4wNjQgMy4yODEgMS4zNzUgMS4yNjIgMi41MzUgMS44OTEgMy40ODIgMS44OTEuNjAyIDAgMS40MTYtLjEyNSAyLjQ0OS0uMzc5IDEuMDMxLS4yNSAxLjcyMS0uMzc3IDIuMDY0LS4zNzcgMS4wMzMgMCAxLjU0NyAxLjg5MyAxLjU0NyA1LjY3OCAwIDMuNjE3LS44NCA5LjE2OC0yLjUyMyAxNi42NTQtMi4xODgtOC41OC00LjUtMTIuODcxLTYuOTM4LTEyLjg3MS0uMzM4IDAtMS4wMzEuMjUyLTIuMDgyLjc2LTEuMDUzLjUwMi0xLjgzLjc1NC0yLjMzNC43NTQtMi40MzggMC00LjYyNS0yLjIyNy02LjU2MS02LjY4OC0zLjg2OS41OS01LjgwNSAyLjU2Ny01LjgwNSA1LjkzNCAwIDEuNjg0Ljc3NyAzLjAyNyAyLjMzNiA0LjAzNSAxLjU1MyAxLjAwOCAyLjMzNCAxLjcyNyAyLjMzNCAyLjE0NSAwIDIuMjczLTMuMzI0IDUuNzY0LTkuOTY5IDEwLjQ3My0zLjUzMSAyLjUyMy01Ljk3MyA0LjI4OS03LjMxNiA1LjI5NyAxLjE3NC0xLjUxMiAyLjM1Mi0zLjQ4NyAzLjUzMy01LjkyOCAxLjM0NC0yLjc3NSAyLjAxOC00LjkyIDIuMDE4LTYuNDM2IDAtLjg0LS45NjctMi4wMi0yLjkwMi0zLjUzMy0xLjkzNi0xLjUxMi0yLjktMy4xMTEtMi45LTQuNzkzIDAtMS40MjguNTAyLTMuMTkzIDEuNTEyLTUuMjk5LTEuMDk0LTEuMjYyLTIuMzk1LTEuODk1LTMuOTEtMS44OTUtMy4zNjUgMC01LjA0NSAxLjA5Ni01LjA0NSAzLjI4djMuNDA2Yy4wODIgMi43NzYtMi4wMiA0LjE2NC02LjMxMSA0LjE2NC0zLjI3OSAwLTguNzkxLS43NTktMTYuNTI3LTIuMjcxIDguNzQ4LTIuMTg4IDEzLjEyMS00LjcxMSAxMy4xMjEtNy41NyAwIC4zMzYtLjE2OC0uNjcyLS41MDQtMy4wMjgtLjMzOC0yLjYwNCAxLjUxNC00Ljk2MSA1LjU1MS03LjA2My0uNzU4LTMuODY3LTIuNzczLTUuODA2LTYuMDU3LTUuODA2LS41MDQgMC0xLjQzMi44ODQtMi43NzUgMi42NDctMS4zNDYgMS43NzEtMi42MDcgMi42NTItMy43ODMgMi42NTItMi4wMiAwLTQuNjI5LTIuMTg2LTcuODIyLTYuNTYzLTEuNTE2LTIuMTg0LTMuODMtNS40MjQtNi45NDEtOS43MTUgMS45MzQgMS4wMTIgMy44NjkgMi4wMiA1LjgwNSAzLjAzMSAyLjUyMyAxLjE3NiA0LjU0MSAxLjc2NiA2LjA1NyAxLjc2NiAxLjE3OCAwIDIuMzM0LTEuMDMxIDMuNDY5LTMuMDkyIDEuMTM1LTIuMDYxIDIuNjI5LTMuMDkyIDQuNDc5LTMuMDkyLjI1NCAwIDEuOTM2LjUwNCA1LjA0NyAxLjUxNiAxLjU5Ni0yLjQzOSAyLjM5OC00LjI0OCAyLjM5OC01LjQyNiAwLTEuMDEtLjYxMS0yLjE2Ni0xLjgzLTMuNDcxLTEuMjIxLTEuMzAzLTIuMzM0LTEuOTU1LTMuMzQ0LTEuOTU1LS40MjIgMC0xLjA3Mi4xMjUtMS45NTcuMzc5LS44ODEuMjUyLTEuNTMzLjM3OS0xLjk1My4zNzktMS41MTYgMC0yLjI3My0xLjg5My0yLjI3My01LjY3OCAwLTEuMDEuOTY5LTYuNzcgMi45MDQtMTcuMjg1LS4wODYgMS4yNi40NjEgMy42MTcgMS42MzkgNy4wNjQgMS40MyA0LjIwNyAzLjExMSA2LjMwOSA1LjA0OSA2LjMwOS4zMzQgMCAxLjAwOC0uMjUyIDIuMDE4LS43NTggMS4wMDgtLjUwNCAxLjgwNy0uNzU0IDIuMzk2LS43NTQgMS45MzQgMCAzLjUzMSAxLjA5NCA0Ljc5NSAzLjI3N2wxLjg5MyAzLjQwNmMxLjc2NiAwIDMuMjM4LS42MjkgNC40MTQtMS44OTEgMS4xNzgtMS4yNjIgMS43NjgtMi43NzcgMS43NjgtNC41NDMgMC0xLjg1LS43NzctMy4yNi0yLjMzNC00LjIyNy0xLjU1OS0uOTY3LTIuMzM2LTEuNzAzLTIuMzM2LTIuMjA3IDAtMS43NjggMi43NzctNC43NTIgOC4zMjgtOC45NTggNC40NTctMy4zNjMgNy4zNTktNS4zNCA4LjcwNy01LjkzLTMuNjE3IDQuODc5LTUuNDI2IDguNDUxLTUuNDI2IDEwLjcyNCAwIDEuMTc4LjcxMyAyLjQ0MSAyLjE0NSAzLjc4NSAxLjc2NiAxLjU5OCAyLjc3NSAyLjczNCAzLjAyNyAzLjQwNi44NCAxLjkzOC43NTYgNC41ODYtLjI1MiA3Ljk0OSAyLjI3MSAxLjYgMy45OTQgMi4zOTYgNS4xNzQgMi4zOTYgMi40MzYgMCAzLjY1OC0xLjI2NCAzLjY1OC0zLjc4NSAwLS4yNTItLjEwNS0xLjA1MS0uMzE0LTIuMzk2LS4yMTMtMS4zNDQtLjI3My0yLjEwMi0uMTkxLTIuMjcxLjMzNi0xLjE3OCAyLjY1LTEuNzY4IDYuOTM5LTEuNzY4IDIuNjkxIDAgOC4yODMuNzU4IDE2Ljc4MSAyLjI3My0xLjg1Mi41MDQtNC42MjcgMS4yNi04LjMyNiAyLjI3LTMuMzY1IDEuMDEtNS4wNDkgMi4xNDUtNS4wNDkgMy40MDYgMCAuNTkuMjA5IDEuNTk4LjYzMSAzLjAyNy40MiAxLjQzMi42MzMgMi40OC42MzMgMy4xNTYgMCAxLjE3Ni0uNzU4IDIuMjctMi4yNzEgMy4yNzdsLTQuMjkxIDMuMDMxYzEuMDEgMS44NTIgMS42ODIgMi45NDUgMi4wMiAzLjI3OS44NCAxLjAwOCAxLjk3NSAxLjUxNCAzLjQwNiAxLjUxNCAxLjAxIDAgMS45MzQtLjg4MyAyLjc3NS0yLjY0OC44NC0xLjc2OCAyLjE4OC0yLjY1IDQuMDM3LTIuNjUgMi4yNyAwIDQuODM4IDIuMTA0IDcuNjk3IDYuMzExIDEuNTkzIDIuMzYgNC4wNzUgNS45MzMgNy40NCAxMC43Mjd6bS0yOC4wMDctNy4zMTZjMC01LjM4MS0xLjk3OS0xMC4wNTEtNS45MzItMTQuMDA2LTMuOTUzLTMuOTUzLTguNjIxLTUuOTMtMTQuMDA0LTUuOTMtNS40NjkgMC0xMC4xOCAxLjk1Ny0xNC4xMzEgNS44NjktMy45NTMgMy45MS01Ljk3MyA4LjYtNi4wNTUgMTQuMDY2LS4wODYgNS4zODMgMS45MTIgMTAuMDMgNS45OTIgMTMuOTM4IDQuMDggMy45MTIgOC44MTEgNS44NjkgMTQuMTkzIDUuODY5IDUuNzE5IDAgMTAuNDkyLTEuODczIDE0LjMxOC01LjYxNSAzLjgzLTMuNzQgNS43MDEtOC40NyA1LjYxOS0xNC4xOTF6bS0xLjg5MyAwYzAgNS4xMzEtMS43MjUgOS4zODEtNS4xNzQgMTIuNzQtMy40NTEgMy4zNjctNy43NCA1LjA0OS0xMi44NjkgNS4wNDktNC45NjMgMC05LjIxMS0xLjcyMy0xMi43NDItNS4xNzQtMy41MzEtMy40NDUtNS4yOTktNy42NTItNS4yOTktMTIuNjE1IDAtNC44NzcgMS43ODUtOS4wNjQgNS4zNTktMTIuNTUzIDMuNTc4LTMuNDkgNy44MDMtNS4yMzggMTIuNjgyLTUuMjM4IDQuODc3IDAgOS4xMDQgMS43NjYgMTIuNjggNS4zMDEgMy41NzQgMy41MzMgNS4zNjMgNy42OTUgNS4zNjMgMTIuNDl6JyBmaWxsPScjMEQwRjBGJy8+PC9nPjwvc3ZnPgo=" style="height:1em;"/>' %}
{% assign ulogo = '<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMDAgMTAwJz48ZyBmaWxsPSdub25lJz48Y2lyY2xlIGZpbGw9JyNDMUQ3RTknIGN4PSc1MCcgY3k9JzUwJyByPSc1MCcvPjxwYXRoIGQ9J002Ny40ODggODMuNzE5Yy00Ljc4NyA0Ljg3MS0xMC42ODQgNy4zMDctMTcuNjg4IDcuMzA3LTcuODYxIDAtMTQuMDk4LTIuNjktMTguNzExLTguMDczLTQuMzU5LTUuMTI3LTYuNTM3LTExLjY2Mi02LjUzNy0xOS42MDYgMC04LjU0MyAzLjcxNy0xOC4yODYgMTEuMTUtMjkuMjI0IDYuMDY0LTguOTY5IDEzLjE5OS0xNi44MyAyMS40MDItMjMuNTgtMS4xOTcgNS40NjktMS43OTMgOS4zNTUtMS43OTMgMTEuNjYyIDAgNS4yOTkgMS42NjQgMTAuNDY3IDQuOTk2IDE1LjUwOCA0LjEwMiA1Ljk4IDcuMjE5IDEwLjQyNiA5LjM1NyAxMy4zMjggMy4zMzIgNS4wNDMgNC45OTggOS45NTUgNC45OTggMTQuNzM3LjAwMiA3LjA5My0yLjM5MSAxMy4wNzQtNy4xNzQgMTcuOTQxem0tLjEyOS0yNy4zNjJjLTEuMjgxLTIuODYxLTIuNzc3LTQuNzYyLTQuNDg2LTUuNzAzLjI1Ni41MTQuMzg1IDEuMjQuMzg1IDIuMTggMCAxLjc5NS0uNTEyIDQuMzU3LTEuNTM5IDcuNjg5bC0xLjY2NCA1LjEyN2MwIDIuOTkgMS40OTIgNC40ODYgNC40ODQgNC40ODYgMy4xNiAwIDQuNzQyLTIuMDk1IDQuNzQyLTYuMjgxIDAtMi4xMzQtLjY0LTQuNjMyLTEuOTIyLTcuNDk4eicgZmlsbD0nIzBEMEYwRicvPjwvZz48L3N2Zz4K" style="height:1em;"/>' %}
{% assign blogo = '<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI0NBQzVDMCIgY3g9IjUwIiBjeT0iNTAiIHI9IjUwIi8+PHBhdGggZD0iTTkwLjY5NSA0OC4xNGMwIDUuNDYzLTIuMDA4IDkuMTg5LTYuMDIgMTEuMTc1LTEuMTcyLjU4LTQuODUgMS4zNjUtMTEuMDM3IDIuMzYtNC4wMTIuNjYzLTYuMDE4IDIuMTk0LTYuMDE4IDQuNTkydjEwLjA1OGMwIC40MTguMTI1IDEuNjk4LjM3NSAzLjg1bC4zNzcgMy45NzVjMCAxLjI0Mi0uMjkzIDMuMjczLS44NzkgNi4wODUtMS41ODguMzMtMy40MjguNzAyLTUuNTE4IDEuMTItLjY3LTIuNDg2LTEuMDA0LTQuMTgyLTEuMDA0LTUuMDk1IDAtLjQxMS4xMDUtMS4wMzQuMzEzLTEuODYzLjIwNy0uODI2LjMxNi0xLjQ0Ny4zMTYtMS44NjQgMC0uNTc1LS41Mi0yLjE5MS0xLjU1OS00LjgzOWgtMS45NDVjLS4yNTguNDE0LS4zNDQuOTUyLS4yNiAxLjYxMy4zMzQgMS40MDguNDU5IDIuNjA3LjM3NyAzLjZhMjgyLjY1NSAyODIuNjU1IDAgMCAxLTUuODk1IDMuOTc0Yy0uNTg2LS4xNjQtLjc5My0uMjQ3LS42MjktLjI0N3YtOC44MTZjLS4xNjQtLjQxMi0uNTg0LS41NzUtMS4yNTQtLjQ5N2gtMS41MDRsLTEuNTA0IDExLjY3Yy0xLjE3NC4wODMtMi41OTIuMDgzLTQuMjY0IDAtLjU4OC0yLjczLTEuNjMxLTYuNzg1LTMuMTM1LTEyLjE2N2gtMS4wMDRjLS45MjIgMi45LTEuNDIyIDQuNDc0LTEuNTA2IDQuNzIyIDAgLjMzLjEwNC45Ny4zMTQgMS45MjIuMjA3Ljk1My4zMTMgMS41OTMuMzEzIDEuOTI0IDAgLjI0OC0uMDg0Ljg2OC0uMjUgMS44NjJsLS4zNzcgMi45OGEuODYyLjg2MiAwIDAgMS0uNjI3LjI0OGMtMi41MDggMC00LjE4Mi0uNjItNS4wMTYtMS44Ni0uODM2LTEuMjQ0LTEuMTcyLTIuOTgyLTEuMDA0LTUuMjE5bDEuMDA0LTE0Ljg5OGMwLS4yNS4wODItLjU4LjI1LS45OTQuMTY0LS40MTQuMjUtLjcwNC4yNS0uODY4IDAtLjY2NC0uNzExLTEuOTg5LTIuMTMxLTMuOTc1LS4yNDgtLjA4LTEuNTQ5LS4zNzMtMy44ODctLjg3LTEuNDI0LS4zMy00LjIyNS0uOTA5LTguNDAyLTEuNzM5LTUuNzcxLTEuMDczLTguNjU0LTUuNjY4LTguNjU0LTEzLjc4MiAwLTEyLjA4NiA1LjAxOC0yMi4xNDMgMTUuMDUxLTMwLjE3My40MTQgMi4yMzYgMS4xMjcgNS4yMTQgMi4xMjkgOC45NC43NTQuMTY4IDIuMzg1LjU0IDQuODkxIDEuMTE3LjUwNC4xNjcgMy4wNTMgMS4wNzggNy42NTIgMi43MzMtMi4zNDQtMS40MDgtNS4zOTMtMy42ODItOS4xNTYtNi44My0xLjQyMi0xLjY1NS0yLjEzMy00LjQyNi0yLjEzMy04LjMxNiAwLS45MTEgMS41OS0xLjk4OSA0Ljc2OC0zLjIzMiAyLjg0LTEuMTU5IDQuOTc1LTEuODE4IDYuMzk2LTEuOTg2IDQuNTE0LS41NzcgNy45ODQtLjg3IDEwLjQxLS44NyAxMC40NDkgMCAxOC44OTEgMi42NSAyNS4zMjggNy45NDktMi4wODggMi40MDItNS42ODQgNC45NjQtMTAuNzgzIDcuNjk2IDIuMDA4LjA4MyA0LjkzNC0uNyA4Ljc3OS0yLjM2IDMuODQ0LTEuNjUzIDUuNDc1LTIuNDgzIDQuODkxLTIuNDgzLjY2OCAwIDIuMDA4IDEuMzI3IDQuMDE0IDMuOTc1IDEuNTA0IDEuOTg2IDIuNzE1IDMuNzY5IDMuNjM3IDUuMzM3IDIuNjc0IDQuNzIxIDQuNDcxIDkuODEgNS4zOTMgMTUuMjc0IDAgMS45MDYuMDQxIDMuMjcyLjEyNSA0LjA5OHYuOTk0aC4wMDJabS00OC4wMzEgMi4yMzVjMC0zLjU1OC0xLjU2OC02LjkzMi00LjcwMy0xMC4xMjItMy4xMzctMy4xODctNi41MDItNC43NzgtMTAuMDk2LTQuNzc4LTMuMTc4IDAtNS45NzcgMS4zMzUtOC40MDIgNC0yLjQyNiAyLjY2Ni0zLjYzNyA1LjYyNS0zLjYzNyA4Ljg3NCAwIDIuODMgMS4zNzkgNC42NjYgNC4xMzkgNS40OTggMS43NTYuNSA0LjIxOS43OTMgNy4zOTguODc0aDYuODk4YzUuNTk4LjA4MyA4LjQwMy0xLjM2NiA4LjQwMy00LjM0NlptMTMuNjY4IDE1LjR2LTMuODUxYTEyMC45NTMgMTIwLjk1MyAwIDAgMS0xLjc1NC0zLjM1NGMtLjUwMi0xLjY1Ny0xLjQyMi0zLjk3NC0yLjc2LTYuOTU1bC0xLjM4MSAxNC41MjljMCAxLjE2LS4yNSAxLjczOC0uNzUyIDEuNzM4LS4zMzQgMC0uNTg0LS4wODEtLjc1Mi0uMjQ1LS41ODYtOC43NzYtLjg3OS0xMi41ODQtLjg3OS0xMS40Mjd2LTQuMzQ0Yy0uMTY4LS4yNTEtLjM3NS0uMzc1LS42MjUtLjM3NS0yLjg0NCAyLjkwMS00LjI2NCA3LjU3Ni00LjI2NCAxNC4wMzIgMCAzLjU2LjMzIDUuNzUzIDEuMDAyIDYuNTgyLjY3LS4xNjQgMS40MjItLjQ1NSAyLjI1OC0uODY4LjMzNC0uMTY3IDEuMjk1LS4yNSAyLjg4Ny0uMjUgMS41ODQgMCAzLjUxLjQ5NyA1Ljc2NiAxLjQ5LjgzNiAwIDEuMjU0LTIuMjM0IDEuMjU0LTYuNzAzWm0yOC4zNDQtMTcuMzAzYzAtMy4zMzMtMS4yNTQtNi4zMTItMy43NjItOC45MzUtMi41MS0yLjYyMi01LjM5NS0zLjkzNi04LjY1Mi0zLjkzNi0zLjUxMiAwLTYuNzk1IDEuNTkxLTkuODQ2IDQuNzc4LTMuMDUzIDMuMTg3LTQuNTc4IDYuNTE5LTQuNTc4IDkuOTk2IDAgMi45IDEuNDIgNC4zNDYgNC4yNjQgNC4zNDZoMTQuNDIyYzUuNDMzLS4wODEgOC4xNTItMi4xNjUgOC4xNTItNi4yNDlaIiBmaWxsPSIjMEQwRjBGIi8+PC9nPjwvc3ZnPgo=" style="height:1em;"/>' %}
{% assign rlogo = '<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMDAgMTAwJz48ZyBmaWxsPSdub25lJz48Y2lyY2xlIGZpbGw9JyNFNDk5NzcnIGN4PSc1MCcgY3k9JzUwJyByPSc1MCcvPjxwYXRoIGQ9J005MS45NjUgNjYuNjE3Yy0zLjczNiA4LjkxMi0xMS4xNiAxMy4zNjctMjIuMjc1IDEzLjM2Ny0yLjAzNyAwLTQuMjQ2LjI1NC02LjYyMS43NjItMy41NjQuNzY0LTUuMzQ2IDEuODI4LTUuMzQ2IDMuMTg2IDAgLjQyNC4yOTUuOTEuODkxIDEuNDYzLjU5Mi41NTMgMS4xMDQuODI2IDEuNTI3LjgyNi0yLjEyMyAwLS42OC4wNjQgNC4zMjYuMTkxIDUuMDA4LjEyNyA4LjE0OC4xOTEgOS40MjIuMTkxLTcuMzgzIDQuMzI2LTE5LjczMiA2LjMxOS0zNy4wNDMgNS45ODEtNS42ODgtLjA4NC0xMC41NjYtMi41ODgtMTQuNjM5LTcuNTEtMy45OTItNC42NjktNS45ODQtOS44ODgtNS45ODQtMTUuNjU4IDAtNi4xMDggMi4wNTctMTEuMzA4IDYuMTc2LTE1LjU5NSA0LjExMy00LjI4MiA5LjIyOS02LjQyNyAxNS4zMzgtNi40MjcgMS4zNTcgMCAzLjE2LjI5NyA1LjQxLjg5MSAyLjI0OC41OTQgMy43NTYuODkxIDQuNTE4Ljg5MSAzLjEzOSAwIDcuMDQ1LTEuMjkzIDExLjcxMy0zLjg4MyA0LjY2Ni0yLjU4OCA2Ljg3NS0zLjg4MyA2LjYyMS0zLjg4My0uODUgOC45MTItMy44MiAxNC44OTYtOC45MTQgMTcuOTQ4LTMuNjQ4IDIuMTIzLTUuNDczIDQuMjAxLTUuNDczIDYuMjM2IDAgMS4yNzMuNzY0IDIuMjkzIDIuMjkxIDMuMDU3IDEuMTg4LjU5NSAyLjUwMi44OTIgMy45NDUuODkyIDIuMjA3IDAgNC4zNzEtMS4zNTYgNi40OTQtNC4wNzEgMi4xMTktMi43MTggMy4wNTUtNS4xNzcgMi44MDEtNy4zODYtLjI1NC0yLjU0NS0uMDg0LTUuNjAzLjUxLTkuMTY0LjE2OC0xLjAyLjc4My0yLjI3IDEuODQ0LTMuNzU0IDEuMDYxLTEuNDg2IDIuMDE2LTIuMzk4IDIuODY1LTIuNzM4IDAgLjc2Mi0uMjc1IDIuMDM3LS44MjggMy44MTgtLjU1MyAxLjc4MS0uODI2IDMuMS0uODI2IDMuOTQ3IDAgMS44NjcuNTA4IDMuMzA5IDEuNTI3IDQuMzI2IDEuNTI1LS41OTIgMi44ODMtMi41MDIgNC4wNzQtNS43MjkgMS4wMTYtMi40NTkgMS42MDktNC44MzYgMS43ODEtNy4xMjctMy41NjYtLjE3LTYuOTgyLTEuNzgxLTEwLjI0OC00LjgzOC0zLjI2OC0zLjA1Ny00LjktNi4zNjUtNC45LTkuOTI4IDAtLjU5NC4wODItMS4xODguMjU2LTEuNzgzLjUwOC43NjQgMS4yNzEgMS45NTMgMi4yODkgMy41NjQgMS40NDMgMi4xMjEgMi41NDcgMy4xODIgMy4zMTMgMy4xODIgMS4wMTYgMCAxLjUyNS0xLjA2MSAxLjUyNS0zLjE4MiAwLTIuNzE1LS43MjMtNS4xNzYtMi4xNjQtNy4zODMtMS42MTMtMi42MzEtMy42OTMtMy45NDctNi4yMzgtMy45NDctMS4xODkgMC0yLjk3MS42MzctNS4zNDQgMS45MS0yLjM3OSAxLjI3MS00LjU0MyAxLjkxLTYuNDkyIDEuOTEtLjU5NiAwLTMuMjI5LS43NjYtNy44OTUtMi4yOTMgOC4yMy0xLjM1NSAxMi4zNDgtMi41ODYgMTIuMzQ4LTMuNjkxIDAtMi44ODUtNS42NDUtNC44MzgtMTYuOTMtNS44NTUtMS4xMDUtLjA4NC0zLjE0MS0uMjU0LTYuMTExLS41MS4zMzgtLjQyNCAyLjc1OC0uODkxIDcuMjU4LTEuNCAzLjgxOC0uNDIyIDYuNDkyLS42MzcgOC4wMTgtLjYzNyAyMC4xOTcgMCAzMy4wMTIgOS44MDUgMzguNDQzIDI5LjQwOC45MzQtLjc3MyAxLjQwMi0yLjA2NiAxLjQwMi0zLjg3MSAwLTIuMzI0LS42OC01LjI1LTIuMDM3LTguNzc3LS41MTItMS4zNzUtMS4zMTgtMy40NDEtMi40Mi02LjE5MyA2Ljk1NyA4Ljg2NyAxMC40MzkgMTcuMjcgMTAuNDM5IDI1LjE5OSAwIDQuMTc4LS45NzkgNy45NzMtMi45MyAxMS4zODEtMS4yNyAyLjMwMy0zLjY1IDUuMjQ0LTcuMTI3IDguODI2LTMuNDggMy41OC01Ljg1NyA2LjM1Mi03LjEzMSA4LjMxMyA0LjY2OC0xLjI3MSA3LjcyNS0yLjI0OCA5LjE2OC0yLjkyOCAzLjIyMy0xLjQ0IDYuMTUtMy42MDYgOC43ODMtNi40OTIgMCAxLjEwNi0uNDY3IDIuNzYyLTEuNCA0Ljk2N3ptLTU1LjUwMi01MC4wMjVjMCAxLjUyNS0uODUgMi41MDItMi41NDUgMi45MjZsLTMuMzExLjUxYy0xLjE4OS41OTQtMi45MjggMi45MjgtNS4yMTkgNy0uMjU2LTEuMjcxLS42MzctMy4wNTMtMS4xNDYtNS4zNDYtLjc2NC4wODYtMi4wMzUuNzY0LTMuODE4IDIuMDM3LS43NjQuNTk0LTEuOTk2IDEuNDg0LTMuNjkzIDIuNjcyLjUxMi0zLjA1NSAyLjIwNy02LjE0OCA1LjA5NC05LjI5MyAzLjA1NS0zLjQ3NyA2LjAyNS01LjIxNyA4LjkxLTUuMjE3IDMuODE4IDAgNS43MjggMS41NzIgNS43MjggNC43MTF6bTIyLjE1IDExLjcwOWMwIDEuNDQzLS43ODUgMi42NTQtMi4zNTUgMy42MjktMS41Ny45NzctMy4xMTkgMS40NjUtNC42NDYgMS40NjUtMi4wMzcgMC0zLjg2My0xLjE0Ni01LjQ3My0zLjQzOC0xLjk1NS0yLjgwMS0zLjk0Ny00LjYyNS01Ljk4NC01LjQ3Ny40MjQtLjQyMi45MzQtLjYzNSAxLjUyOS0uNjM1Ljc2NCAwIDIuMDU1LjU5NCAzLjg4MSAxLjc4MSAxLjgyNCAxLjE4OSAyLjk5IDEuNzgzIDMuNTAyIDEuNzgzLjQyNCAwIDEuMTIzLS41OTQgMi4xLTEuNzgzLjk3NS0xLjE4OCAyLjA1Ny0xLjc4MSAzLjI0Ni0xLjc4MSAyLjguMDAxIDQuMiAxLjQ4NyA0LjIgNC40NTZ6JyBmaWxsPScjMEQwRjBGJy8+PC9nPjwvc3ZnPgo=" style="height:1em;"/>' %}
{% assign glogo = '<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMDAgMTAwJz48ZyBmaWxsPSdub25lJz48cGF0aCBkPSdNMTAwIDQ5Ljk5OGMwIDI3LjYxNS0yMi4zODUgNTAuMDAyLTUwLjAwMiA1MC4wMDItMjcuNjEzIDAtNDkuOTk4LTIyLjM4Ny00OS45OTgtNTAuMDAyIDAtMjcuNjEzIDIyLjM4NS00OS45OTggNDkuOTk4LTQ5Ljk5OCAyNy42MTcgMCA1MC4wMDIgMjIuMzg1IDUwLjAwMiA0OS45OTh6JyBpZD0nU2hhcGUnIGZpbGw9JyNBM0MwOTUnLz48cGF0aCBkPSdNOTMuNzYyIDU2LjIyNWMwIDEuNjY4LS42NDUgMy4xNjQtMS45MzYgNC40OTgtMS4yODkgMS4zMzItMi43NyAxLjk5OC00LjQzNiAxLjk5OC0yLjY2MiAwLTQuNjIzLTEuMjUtNS44NjktMy43NDhsLTUuODcxLS4yNWMtMS4yNTIgMC0zLjcwOS41NDMtNy4zNzEgMS42MjUtMy45MTQgMS4wODItNi4xNjQgMS45NTctNi43NDYgMi42MjMtLjkxNi45OTgtMS42NjQgMy4zMzItMi4yNDggNi45OTYtLjUwMiAyLjk5OC0uNzQ4IDUuMjA1LS43NDggNi42MjEgMCAyLjI0Ni4zNTIgMy44OTMgMS4wNjEgNC45MzQuNzA5IDEuMDQxIDIuMTY2IDEuOTE2IDQuMzcxIDIuNjIzIDIuMjA1LjcwNyAzLjU2MSAxLjEwNCA0LjA2MSAxLjE4Ny4zMzIgMCAuODczLS4wNDEgMS42MjUtLjEyNWgxLjQ5OGMxLjA4IDAgMi4yMDUuMTcgMy4zNzMuNSAxLjY2Ni41IDIuMzc1IDEuMTY2IDIuMTI1IDItMS4xNjgtLjE2Ni0zLjIwNy4wODQtNi4xMjEuNzVsMy40OTYgMS43NDhjMCAxLTEuNDE2IDEuNDk4LTQuMjQ2IDEuNDk4LS43NTIgMC0xLjc3MS0uMTY2LTMuMDYzLS40OTgtMS4yOTEtLjMzNi0yLjE0NS0uNS0yLjU1OS0uNWgtMS42MjVjLS4wODIuODMyLS4zMzQgMi4wOC0uNzUgMy43NDYtMS40MTgtLjA4NC0zLjA4LS45MTgtNC45OTYtMi40OTgtMS45MTgtMS41OC0zLjEyMy0yLjM3My0zLjYyMS0yLjM3My0uNTAyIDAtMS4yMTEuNzkzLTIuMTI1IDIuMzczLS45MTggMS41OC0xLjM3NSAyLjY2NC0xLjM3NSAzLjI0OC0xLjA4Mi0uNTg0LTEuOTk2LTEuNjY4LTIuNzUtMy4yNDgtLjMzMi0xLjA4NC0uNzA3LTIuMTY2LTEuMTIxLTMuMjQ4LS44MzIuMDg0LTIuMzc1IDEuODM0LTQuNjIxIDUuMjQ4aC0uNjI3Yy0uMTY2LS4yNTItLjc5NS0yLTEuODczLTUuMjQ4LTIuNTgyLS44MzItNC45OTYtMS4yNDgtNy4yNDYtMS4yNDgtMS4wODIgMC0yLjc0OC4yNS00Ljk5Ni43NDhsLTMuNDk2LS4yNDhjLjQ5OC0uNSAxLjk1NS0xLjQ1NyA0LjM3MS0yLjg3MyAyLjgzLTEuNjY2IDQuOTk2LTIuNSA2LjQ5Ni0yLjUuMjQ2IDAgLjU3OC4wNDMgMSAuMTI1LjQxNC4wODYuNzUuMTI1IDEgLjEyNS41NzggMCAxLjUxOC0uMzEyIDIuODA5LS45MzggMS4yOTEtLjYyMyAyLjAzOS0xLjE4NiAyLjI0Ni0xLjY4NC4yMTEtLjUwNC4zMTYtMS43OTMuMzE2LTMuODc1IDAtNC43NDYtMS4yNS04LjI4NS0zLjc1LTEwLjYxNy0yLjE2OC0yLjA4Mi01Ljc0Ni0zLjU4LTEwLjc0NC00LjQ5OC0xLjMzMiA0Ljc0Ni01LjA4IDcuMTIzLTExLjI0IDcuMTIzLTIgMC0zLjk5OC0xLjIwNy01Ljk5Ni0zLjYyMy0xLjk5Ni0yLjQxNi0yLjk5Ni00LjYyMy0yLjk5Ni02LjYyMSAwLTMuMDgyIDEuMjg3LTUuNjIxIDMuODY5LTcuNjIzLTIuMDgtMi4xNjItMy4xMjEtNC4zNjktMy4xMjEtNi42MTcgMC0yLjA4NC42NDMtMy45MTQgMS45MzYtNS41IDEuMjkxLTEuNTc4IDIuOTc3LTIuNDk2IDUuMDU5LTIuNzQ4LS4xNjYtMi42NjIuNzA3LTQuNDk2IDIuNjIzLTUuNDk2LS45MTYtLjkxNC0xLjM3My0yLjUzNy0xLjM3My00Ljg2OSAwLTIuNzQ4LjkxNi01LjAzOSAyLjc0OC02Ljg3MSAxLjgzLTEuODMyIDQuMTIxLTIuNzUgNi44NjktMi43NSAzIDAgNS40NTcgMS4wNDUgNy4zNzEgMy4xMjUgMi40MTYtOC4yNDQgNy42MjEtMTIuMzY3IDE1LjYxMy0xMi4zNjcgNC4xNjQgMCA3LjgyOCAxLjY2NiAxMC45OTQgNC45OTggMS4xNjYgMS4yNDggMS43NDggMS45MTYgMS43NDggMS45OTYtMSAwLS40OTgtLjE4OCAxLjUtLjU2MSAxLjk5Ni0uMzc1IDMuNDUzLS41NjMgNC4zNzMtLjU2MyAzLjI0NiAwIDYuMTE5IDEuMjA3IDguNjE5IDMuNjIzIDIuMTY0IDIuMTY2IDMuNjY0IDQuOTEyIDQuNDk4IDguMjQ0LjU4LjA4NCAxLjQ5OC4zMzIgMi43NDguNzQ4IDEuODMuOTIgMi43NDggMi40OTggMi43NDggNC43NDggMCAuNDE4LS4zMzYgMS4yMDktMSAyLjM3MyA1LjMyOCAyLjk5OCA3Ljk5NCA3LjE2MiA3Ljk5NCAxMi40OTIgMCAxLjQ5OC0uNTgyIDMuNTg0LTEuNzQ4IDYuMjQ3IDIuMTY2IDEuMjQ3IDMuMjQ2IDMuMDgxIDMuMjQ2IDUuNDk1em0tNTEuNDY3IDUuNDk2di0xLjYyM2MwLTEuOTE0LS45MzYtMy42NjQtMi44MDktNS4yNDYtMS44NzUtMS41ODItMy43Ny0yLjM3My01LjY4NC0yLjM3My0yLjMzNCAwLTQuNDk2LjU0MS02LjQ5NiAxLjYyMSA0LjQxMy0uMjQ4IDkuNDExIDIuMjkzIDE0Ljk4OSA3LjYyMXptLTIuMjQ2LTE1LjQ4OWMtMS4yNS0xLjQxOC0yLjMzMi0yLjg3NS0zLjI1LTQuMzczLTMuNDk4LjkxNi01LjI0NiAxLjk1Ny01LjI0NiAzLjEyMSAxLS4wOCAyLjQ1Ny4xMDUgNC4zNzEuNTY0IDEuOTE0LjQ1OSAzLjI5MS42ODggNC4xMjUuNjg4em03LjYyMS0zLjg3M3YtNS40OTZjLTItLjMzMi0zLjIxMS0uNS0zLjYyMy0uNXYxLjg3M2wzLjYyMyA0LjEyM3ptMTYuMjM4LTMuNDk4Yy0xLS40MTYtMi44NzUtMS4yNS01LjYyMS0yLjQ5OHYxMC43NDJjMy45MTItMi4yNSA1Ljc4NS00Ljk5OCA1LjYyMS04LjI0NHptNi44NjcgMTQuNzQxbC0yLjc0Ni0zLjM3M2MtMS42NjQgMS4xNjctMy4zNTIgMi4zNTQtNS4wNjEgMy41NjEtMS43MDkgMS4yMDctMy4xODYgMi41NjMtNC40MzIgNC4wNiAzLjc0Ny0yLjAwMiA3LjgyOS0zLjQxNCAxMi4yMzktNC4yNDh6JyBmaWxsPScjMEQwRjBGJy8+PC9nPjwvc3ZnPgo=" style="height:1em;"/>' %}

When it comes to building commander decks, I lean toward the esoteric. I think of each deck concept as a puzzle and each game as an opportunity to show off a hard-won solution. With this project, I wanted to deconstruct the very concept of a deck a little---what if a deck could actually be ten decks?

I played bit of the Jumpstart product, in which two packs from a list of different themes are shuffled together to form a ready-to-play 40 card deck. I slowly worked through a box of Jumpstart 2024 with one of my former students over the course of a few weeks, and I was impressed by the replayability. In particular, how playing the same pack twice paired with different themes created very different experiences.

**Goal:** Inspired by Jumpstart, this project consists of a set half-decks, each helmed by a partner commander. One must be able to take any two of these half decks, shuffle them together, and have a functional commander deck.

To skip to decklists and playtesting, click [here](#try-it-out).

## Some Considerations and Constraints
One consideration has to do with logistic: the decks must be separable back into its two halves.  Another concerns scope: the more half-decks in the set, the more complicated the interactions between them are. In light of these two considerations, I settled on five mono-color half-decks. My options for partners are then covered by the following Scryfall query:

[`o:partner -o:"partner with" -o:"partner—" ci=1 legal:commander`](https://scryfall.com/search?q=o%3Apartner+-o%3A%22partner+with%22+-o%3A%22partner%E2%80%94%22+ci%3D1+legal%3Acommander)

<style>
	code {
		text-align: center;
		width: 100%;
		display: inline-block;
	}
</style>

## Skeleton
When two halves are shuffled together, the result should feel like a cohesive whole. With this goal in mind, we want to place cards in each half that play well with other halves. Specifically, each half will have six cards chosen to synergize with each other half. For example, the white half will have six cards that work well with the blue half, six for the black half, and so on for the red and green halves. This leaves 25 cards: eight cards making up the "core" strategy of the half and 17 lands. <button id="skeletontoggle">Toggle Skeleton Spreadsheet</button>

<div id="skeletonsheet" class="hidden">
<style type="text/css">.ritz .waffle a { color: inherit; }.ritz .waffle .s0{text-align:left;color:#000000;font-family:Arial;font-size:10pt;vertical-align:bottom;white-space:nowrap;direction:ltr;padding:2px 3px 2px 3px;}.ritz .waffle .s5{background-color:#d9ead3;text-align:left;color:#000000;font-family:Arial;font-size:10pt;vertical-align:bottom;white-space:nowrap;direction:ltr;padding:2px 3px 2px 3px;}.ritz .waffle .s7{text-align:left;color:#0c0c14;font-family:Arial;font-size:10pt;vertical-align:bottom;white-space:nowrap;direction:ltr;padding:2px 3px 2px 3px;}.ritz .waffle .s2{background-color:#c9daf8;text-align:left;color:#000000;font-family:Arial;font-size:10pt;vertical-align:bottom;white-space:nowrap;direction:ltr;padding:2px 3px 2px 3px;}.ritz .waffle .s4{background-color:#f4cccc;text-align:left;color:#000000;font-family:Arial;font-size:10pt;vertical-align:bottom;white-space:nowrap;direction:ltr;padding:2px 3px 2px 3px;}.ritz .waffle .s6{background-color:#000000;text-align:left;color:#000000;font-family:Arial;font-size:10pt;vertical-align:bottom;white-space:nowrap;direction:ltr;padding:2px 3px 2px 3px;}.ritz .waffle .s3{background-color:#cccccc;text-align:left;color:#000000;font-family:Arial;font-size:10pt;vertical-align:bottom;white-space:nowrap;direction:ltr;padding:2px 3px 2px 3px;}.ritz .waffle .s1{background-color:#fff2cc;text-align:left;color:#000000;font-family:Arial;font-size:10pt;vertical-align:bottom;white-space:nowrap;direction:ltr;padding:2px 3px 2px 3px;}</style><div class="ritz grid-container" dir="ltr"><table class="waffle" cellspacing="0" cellpadding="0"><thead><tr><th class="row-header freezebar-vertical-handle"></th><th id="0C0" style="width:100px;" class="column-headers-background">A</th><th id="0C1" style="width:100px;" class="column-headers-background">B</th><th id="0C2" style="width:100px;" class="column-headers-background">C</th><th id="0C3" style="width:100px;" class="column-headers-background">D</th><th id="0C4" style="width:100px;" class="column-headers-background">E</th><th id="0C5" style="width:100px;" class="column-headers-background">F</th></tr></thead><tbody><tr style="height: 20px"><th id="0R0" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">1</div></th><td class="s0" dir="ltr">Partner:</td><td class="s1"></td><td class="s2"></td><td class="s3"></td><td class="s4"></td><td class="s5"></td></tr><tr><th style="height:3px;" class="freezebar-cell freezebar-horizontal-handle"></th><td class="freezebar-cell"></td><td class="freezebar-cell"></td><td class="freezebar-cell"></td><td class="freezebar-cell"></td><td class="freezebar-cell"></td><td class="freezebar-cell"></td></tr><tr style="height: 20px"><th id="0R1" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">2</div></th><td class="s0" dir="ltr">Core</td><td></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R2" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">3</div></th><td class="s0" dir="ltr">Core</td><td></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R3" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">4</div></th><td class="s0" dir="ltr">Core</td><td></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R4" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">5</div></th><td class="s0" dir="ltr">Core</td><td></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R5" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">6</div></th><td class="s0" dir="ltr">Core</td><td></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R6" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">7</div></th><td class="s0" dir="ltr">Core</td><td></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R7" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">8</div></th><td class="s0" dir="ltr">Core</td><td></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R8" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">9</div></th><td class="s0" dir="ltr">Core</td><td></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R9" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">10</div></th><td class="s1"></td><td class="s6"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R10" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">11</div></th><td class="s1"></td><td class="s6"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R11" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">12</div></th><td class="s1"></td><td class="s6"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R12" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">13</div></th><td class="s1"></td><td class="s6"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R13" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">14</div></th><td class="s1"></td><td class="s6"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R14" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">15</div></th><td class="s1"></td><td class="s6"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R15" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">16</div></th><td class="s2"></td><td></td><td class="s6"></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R16" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">17</div></th><td class="s2"></td><td></td><td class="s6"></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R17" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">18</div></th><td class="s2"></td><td></td><td class="s6"></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R18" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">19</div></th><td class="s2"></td><td></td><td class="s6"></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R19" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">20</div></th><td class="s2"></td><td></td><td class="s6"></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R20" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">21</div></th><td class="s2"></td><td></td><td class="s6"></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R21" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">22</div></th><td class="s3"></td><td></td><td></td><td class="s6"></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R22" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">23</div></th><td class="s3"></td><td></td><td></td><td class="s6"></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R23" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">24</div></th><td class="s3"></td><td></td><td></td><td class="s6"></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R24" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">25</div></th><td class="s3"></td><td></td><td></td><td class="s6"></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R25" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">26</div></th><td class="s3"></td><td></td><td></td><td class="s6"></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R26" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">27</div></th><td class="s3"></td><td></td><td></td><td class="s6"></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R27" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">28</div></th><td class="s4"></td><td></td><td></td><td></td><td class="s6"></td><td></td></tr><tr style="height: 20px"><th id="0R28" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">29</div></th><td class="s4"></td><td></td><td></td><td></td><td class="s6"></td><td></td></tr><tr style="height: 20px"><th id="0R29" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">30</div></th><td class="s4"></td><td></td><td></td><td></td><td class="s6"></td><td></td></tr><tr style="height: 20px"><th id="0R30" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">31</div></th><td class="s4"></td><td></td><td></td><td></td><td class="s6"></td><td></td></tr><tr style="height: 20px"><th id="0R31" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">32</div></th><td class="s4"></td><td></td><td></td><td></td><td class="s6"></td><td></td></tr><tr style="height: 20px"><th id="0R32" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">33</div></th><td class="s4"></td><td></td><td></td><td></td><td class="s6"></td><td></td></tr><tr style="height: 20px"><th id="0R33" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">34</div></th><td class="s5"></td><td></td><td></td><td></td><td></td><td class="s6"></td></tr><tr style="height: 20px"><th id="0R34" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">35</div></th><td class="s5"></td><td></td><td></td><td></td><td></td><td class="s6"></td></tr><tr style="height: 20px"><th id="0R35" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">36</div></th><td class="s5"></td><td></td><td></td><td></td><td></td><td class="s6"></td></tr><tr style="height: 20px"><th id="0R36" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">37</div></th><td class="s5"></td><td></td><td></td><td></td><td></td><td class="s6"></td></tr><tr style="height: 20px"><th id="0R37" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">38</div></th><td class="s5"></td><td></td><td></td><td></td><td></td><td class="s6"></td></tr><tr style="height: 20px"><th id="0R38" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">39</div></th><td class="s5"></td><td></td><td></td><td></td><td></td><td class="s6"></td></tr><tr style="height: 20px"><th id="0R39" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">40</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R40" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">41</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R41" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">42</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R42" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">43</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R43" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">44</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R44" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">45</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R45" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">46</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R46" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">47</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R47" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">48</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R48" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">49</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R49" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">50</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R50" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">51</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R51" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">52</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R52" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">53</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R53" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">54</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R54" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">55</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R55" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">56</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>
</div>

## Choosing a Theme: Artifacts
For my first attempt at this kind of project, I figured I should make things easier on myself by choosing partners that have some mechanical overlap. Looking over the options, one word that appears on a partner of each color is "artifact," so I let that word be my guiding theme.

<img class="portrait" src="{{site.url}}/assets/images/blog/cmr-10-ardenn-intrepid-archaeologist.png" />

## White: Ardenn, Intrepid Archaeologist
While [Rebbec, Architect of Ascension](https://scryfall.com/card/cmr/42/rebbec-architect-of-ascension) is the white partner that actually has "artifact" in its rules text, I figured Ardenn's more specific theme of equipment would help to focus the project.

I want to leverage Ardenn's ability to put equipment on an *opponent's* creatures. One way to utilize this ability is to suit up an opposing creature, then goad it. Because white has few ways to goad a creature, we will look to the other halves (particularly red) to include some goad support to synergize with this game plan.

Another reason one might want to equip their opponents' creatures is to laden them with detrimental equipment.

<div class="cardgallery">
	<img src="{{site.url}}/assets/images/blog/tdc-103-skullclamp.png" />
	<img src="{{site.url}}/assets/images/blog/snc-235-cement-shoes.png" />
	<img src="{{site.url}}/assets/images/blog/rix-177-captain-s-hook.png" />
</div>

If an opponent's creature equipped with my Skullclamp dies, *I* draw the two cards. Cement Shoes and similar equipment can lock down an opponent's creature. Whenever we move Captain's Hook off of an opponent's creature, they have to sacrifice that creature. The additional effect of making a creature a pirate segues well into our next choice of partner.


<img class="portrait" src="{{site.url}}/assets/images/blog/cmr-79-malcolm-keen-eyed-navigator.png" />

## Blue: Malcolm, Keen-Eyed Navigator
Malcolm's game plan is to create a bunch of treasures. 
We are avoiding cards that statically count the number of artifacts on the field because in some combinations, we will want to feel free to sacrifice artifacts often. Instead, we focus on cards that trigger upon an artifact entering the battlefield.

<div class="cardgallery">
	<img src="{{site.url}}/assets/images/blog/eoc-74-kappa-cannoneer.png" />
	<img src="{{site.url}}/assets/images/blog/mkc-107-junk-winder.png" />
</div>

<img class="portrait" src="{{site.url}}/assets/images/blog/cmr-131-keskit-the-flesh-sculptor.png" />

## Black: Keskit, the Flesh Sculptor
Because Keskit has a built-in sacrifice outlet, so there are two things we are aiming for to advance the game plan: cards that trigger when an artifact is sacrificed and cards that constitute multiple game objects:

<div class="cardgallery">
	<img src="{{site.url}}/assets/images/blog/mh3-100-marionette-apprentice.png" />
	<img src="{{site.url}}/assets/images/blog/moc-373-scrap-trawler.png" />
	<img src="{{site.url}}/assets/images/blog/mh3-89-drossclaw.png" />
</div>

<img class="portrait" src="{{site.url}}/assets/images/blog/cmr-204-toggo-goblin-weaponsmith.png" />

## Red: Toggo, Goblin Weaponsmith
Toggo's core gameplan involves putting extra lands onto the battlefield. To leverage the tokens he creates, we want cards that trigger when artifacts enter the battlefield.

<div class="cardgallery">
	<img src="{{site.url}}/assets/images/blog/fdn-250-burnished-hart.png" />
	<img src="{{site.url}}/assets/images/blog/eoe-142-lithobraking.png" />
	<img src="{{site.url}}/assets/images/blog/clb-182-ingenious-artillerist.png" />
</div>


<img class="portrait" src="{{site.url}}/assets/images/blog/cmr-233-ich-tekik-salvage-splicer.png" />

## Green: Ich-Tekik, Salvage Splicer
Ich-Tekik wants to do two things: make tokens that can innately be sacrificed and use those to make big golems. To that end, we're looking for food production, golems whose abilities scale with their power, and ways to copy tokens.

<div class="cardgallery">
	<img src="{{site.url}}/assets/images/blog/woe-193-tough-cookie.png" />
	<img src="{{site.url}}/assets/images/blog/bro-198-cradle-clearcutter.png" />
	<img src="{{site.url}}/assets/images/blog/khm-169-esika-s-chariot.png" />
</div>

## Overlaps
Before discussing overlaps, I want note that I am avoiding having any "dead" cards, so a card included in any half needs to support that half's theme. For example, I don't want to include Lightning-Rig Crew in Toggo---despite the fact that it works very well with Malcolm, it doesn't really make sense in any other combination.

### {{wlogo}}{{ulogo}} Ardenn and Malcolm
Here, blue can give Ardenn access to evasive creatures to suit up, and Malcolm benefits from equipment that let pirates hit opponents multiple times
- Evasive creatures
- Equipment that grants double strike or deals direct damage

### {{ulogo}}{{blogo}} Malcolm and Keskit
Black has access to a few pirates, though we'll want to focus on those with some form of evasion. Malcolm's treasure generation already synergizes very well with Keskit's hunger for artifacts, so we'll focus on some cards that synergize with the graveyard.
- Black pirates with evasion
- Blue pirates with graveyard abilities

### {{blogo}}{{rlogo}} Keskit and Toggo
With these two halves, we will have no problem sacrificing plenty of artifacts. 
- Deathtouch creatures to synergize with Toggo's rocks

### {{rlogo}}{{glogo}} Toggo and Ich-Tekik
Green can help Toggo trigger landfall with ramp spells. Including ways to sacrifice artifacts in Toggo will help Ich-Tekik trigger.
- Ramp spells
- Ways to sacrifice artifacts
- Landfall triggers that make more artifact tokens

### {{glogo}}{{wlogo}} Ich-Tekik and Ardenn
The overlap between these two partners is primarily in modifying creatures, whether that's with counters or equipment.
- Cards that care about modifications
- White golems

### {{wlogo}}{{blogo}} Ardenn and Keskit
These two have gameplans that mostly run in parallel without interacting with each other much. The best we can really hope for is cards that are equipment and either come with extra fodder for Keskit or care about creatures dying.
- Equipment that comes with a second game object to be sacrificed to Keskit
- Equipment that trigger when the equipped creature dies

### {{blogo}}{{glogo}} Keskit and Ich-Tekik
Here, Keskit's sacrificing artifacts helps feed into growing Ich-Tekik's golems
- Black golems
- Green cards that come along with artifact tokens

### {{glogo}}{{ulogo}} Ich-Tekik and Malcolm
These two partners care about a particular creature type, so we're looking for creatures that are both types or ways to transform our team's type.
- Changelings
- Effects that set our creatures' types

### {{ulogo}}{{rlogo}} Malcolm and Toggo
The main overlap between these two is creating artifact tokens, although a great bonus is that Toggo's rocks let pirates deal damage without needing to attack. Both halves already leverage artifacts entering the battlefield, so we focus on including red pirates.
- Red pirates

### {{rlogo}}{{wlogo}} Toggo and Ardenn
These two already have a great deal of overlap in that one creates equipment and the other cares about that equipment.
- Creatures that like to carry equipment
- Cards in red to goad opponents' creatures
- Equipment that ramps

## Try It Out

Choose two partners below to see their decklist. 
<ul>
	<li id="decklist_link">Decklist: </li>
	<li id="playtest_link">Playtest: </li>
</ul>

<div id="playtest">
	<img id="ardenn" src="{{site.url}}/assets/images/blog/cmr-10-ardenn-intrepid-archaeologist.png" />
	<img id="malcolm" src="{{site.url}}/assets/images/blog/cmr-79-malcolm-keen-eyed-navigator.png" />
	<img id="keskit" src="{{site.url}}/assets/images/blog/cmr-131-keskit-the-flesh-sculptor.png" />
	<img id="toggo" src="{{site.url}}/assets/images/blog/cmr-204-toggo-goblin-weaponsmith.png" />
	<img id="ich" src="{{site.url}}/assets/images/blog/cmr-233-ich-tekik-salvage-splicer.png" />
</div>


<script src="{{site.url}}/assets/scripts/blog/jumpstart.js"></script>

<style>
#playtest {
	text-align:center;
}

#playtest img {
	width: 16%;
	transition: transform 330ms ease-in-out;
}

.glow {
	transform: translate(0px, 30px);
}

#playtest img:hover {
	cursor:pointer;
	transform: scale(1.1);
}

#playtest img:hover.glow {
	transform: scale(1.1) translate(0px, 30px);
}

.portrait {
	float:right;
	height:24em;
}

#skeletonsheet {
  display: flex;
  align-items: center;
  justify-content: center;
}

#skeletonsheet.hidden {
	display: none;
}

.cardgallery {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cardgallery img {
	/*width: 30%;*/
	height: 20em;
	/*margin:auto;*/
	margin: 1em;
}

</style>
