<template>
  <article>
    <div>
      <section id="intro">
        <h2>vipnode is an <span class="hl1">economic incentive</span> for running <span class="hl2">Ethereum full nodes</span>.</h2>
        <p>The goal is to allow the Ethereum network to remain decentralized by creating a financial marketplace for more people to run full nodes and serve native light clients.</p>
        <p><a href="https://medium.com/@shazow/an-economic-incentive-for-running-ethereum-full-nodes-ecc0c9ebe22" class="btn btn-primary">Read the full story on Medium</a></p>
      </section>

      <section id="get-started">
        <no-ssr>
          <Contract />
        </no-ssr>
      </section>
    </div>

    <section id="features">
      <div>
        <h3>There aren’t enough nodes available.</h3>
        <p>The goal is to allow the Ethereum network to remain decentralized by creating a financial marketplace for more people to run full nodes and serve native light clients.</p>
      </div>
      <div>
        <h3>We need more full nodes with light nodes slots.</h3>
        <p>The goal is to allow the Ethereum network to remain decentralized by creating a financial marketplace for more people to run full nodes and serve native light clients.</p>
      </div>
      <div>
        <h3>vipnode creates an economic incentive to run a full node.</h3>
        <p>The goal is to allow the Ethereum network to remain decentralized by creating a financial marketplace for more people to run full nodes and serve native light clients.</p>
      </div>
      <div>
        <h3>Paying for vip access means a node will always be available.</h3>
        <p>The goal is to allow the Ethereum network to remain decentralized by creating a financial marketplace for more people to run full nodes and serve native light clients.</p>
      </div>
    </section>

    <section id="status">
      <ul>
        <li>
          <h4>V1: MVP</h4>
          <p>vipnode was accepted for an Ethereum Foundation grant. Work on v2 is starting soon</p>
        </li>
        <li>
          <h4>V2: MVP and Design</h4>
          <p>vipnode was accepted for an Ethereum Foundation grant. Work on v2 is starting soon</p>
        </li>
        <li class="current">
          <h4>In Progress</h4>
          <p>vipnode was accepted for an Ethereum Foundation grant. Work on v2 is starting soon</p>
        </li>
      </ul>
      <div class="latest">
        <p class="date">6/21/18</p>
        <p><strong>vipnode was accepted for an Ethereum Foundation grant.</strong> Work on v2 is starting soon, which a support vipnode pools that any full node can join and start earning proportional fees for serving premium clients!</p>
        <p><a href="https://github.com/vipnode/vipnode.org/issues">See current issues on GitHub</a></p>
      </div>
    </section>

    <section id="newsletter">
      <h2>
        <span class="hl1">Breaking changes, new features, and updates will be announced by email.</span> Subscribe here.
      </h2>
      <form action="https://tinyletter.com/vipnode"
            method="post"
            target="popupwindow"
            onsubmit="window.open('https://tinyletter.com/vipnode', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
        <p>
          <label for="tlemail">Email address:</label>
          <input type="text" style="width:240px" name="email" id="tlemail" placeholder="satoshin@gmx.com" />
          <input type="hidden" value="1" name="embed" />
          <input type="submit" value="Subscribe" />
        </p>
        <p><small>I promise no spam, just updates on progress.</small></p>
      </form>
    </section>
  </article>
</template>

<script>
import Contract from "~/components/Contract.vue"

export default {
  components: { Contract },
  head() {
    return {
      title: "vipnode | Economic incentive for Ethereum full nodes",
      meta: [
        { name: 'twitter:card', content: 'summary' },
        { propery: 'og:url', content: 'https://vipnode.org/' },
        { propery: 'og:title', content: 'vipnode' },
        { propery: 'og:description', content: 'Economic incentive for Ethereum full nodes' },
      ]
    }
  }
}
</script>