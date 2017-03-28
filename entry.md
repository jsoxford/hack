---
layout: default
---

# How to Sign up

We're going to use a [central GitHub repository](https://github.com/jsoxford/hack) to keep everything in sync.  If you don't have a GitHub account - [sign up now](https://github.com).

## Step 1.
### Enter some details
{: .sub-heading}

<form id="form">
  <div class="field">
    <label for="name">Team name</label>
    <input type="text" name="name" id="name" placeholder="">
  </div>
  <div class="field">
    <label for="name">Members</label>
    <input type="text" name="members" id="members" placeholder="@github @user-names">
  </div>
  <div class="field">
    <label for="guide">Guide</label>
    <select name="guide" id="guide">
      {% for guide in site.data.guides %}
        <option value="{{ guide.index }}">{{ guide.name }} ({{ guide.technology }})</option>
      {% endfor %}
    </select>
  </div>
  <div class="field">
    <label for="description">Description <div><small>Markdown? Totes</small></div></label>
    <textarea name="description" id="description"></textarea>
  </div>
  <button id="submit">Generate!</button>
  <div class="field">
    <label for="output">Output</label>
    <textarea id="output" onclick="this.focus();this.select()" readonly="readonly"></textarea>
  </div>
</form>


## Step 2.
### Create a file in the our [GitHub](https://github.com/jsoxford/hack) project
{: .sub-heading}


```
---
name: Team name
members:
  - username
guide: username
---

Your description here
```
{: .file-content#content}

<br>Your file should be named `team-name.md`, and be in the `_hacks` directory.

The easiest way to do this is through the GitHub editor.  Click this link

## Step 3.
### Open a Pull Request
{: .sub-heading}

One of our beautiful helpers will check & merge your PR.
