<script>
  import Note from './Note.svelte';

  export let positionLeft = "15vw";
</script>

<style>
  div {
    position: fixed;
    left: var(--position-left);
    height: 100%;
    width: calc(100% - var(--position-left));
    padding-block: 1rem;
    padding-inline: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: min(400px, 40vh);
    gap: 2rem;
    overflow-y: scroll;
  }
</style>

<div style="--position-left: {positionLeft}">
  <Note />
  <Note />
  <Note content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nihil ipsa accusantium, expedita explicabo doloribus consectetur omnis pariatur eveniet necessitatibus deleniti perferendis ex blanditiis sit sequi velit doloremque? Nisi, alias?
  Perferendis, ab laudantium deleniti molestias cumque illum maiores amet minus ipsum quia, ipsam nostrum consequatur velit quod animi sit est facere assumenda ad porro sunt perspiciatis possimus, quibusdam eveniet. Numquam.
  Eaque cupiditate, molestiae animi ipsam, repellendus officia ipsa rem fugit fuga velit voluptatem nesciunt? Aspernatur, pariatur magni reprehenderit, officiis in unde doloribus est minus itaque numquam iure, adipisci perferendis facilis.
  Animi velit exercitationem saepe placeat quo soluta dolorem nulla dolores non, hic ab enim. Iure tempore maiores at repudiandae! Repellendus porro veniam possimus eaque hic minus quae accusantium debitis labore?
  Incidunt facilis aliquid temporibus harum maiores natus quas quidem, debitis nobis. Fugit reiciendis cupiditate nulla dolorum molestiae? Quidem animi adipisci quas expedita error minima corrupti. Culpa illum repellat eos veritatis.
  Cupiditate tenetur quo ratione laudantium dolore placeat aliquam sunt accusamus blanditiis similique excepturi eaque, nulla reiciendis in ullam quae recusandae ad quasi labore adipisci illo. Amet quod cum iusto consectetur?
  Animi asperiores debitis vel error voluptatibus rerum esse ducimus fugit odio tempora? Totam beatae corrupti voluptatibus asperiores, placeat corporis, cupiditate officiis doloremque numquam itaque minima. Incidunt quasi expedita rem nam.
  Consectetur quibusdam ratione voluptates quis porro minima adipisci nemo, praesentium magni. Incidunt, laudantium a vel saepe dignissimos repudiandae. In debitis veniam at quibusdam consectetur nobis? Nisi debitis eveniet ducimus consequuntur?
  Dolorem doloribus labore repudiandae quas ipsum sint tenetur! Odit vitae corporis nobis eius modi fugiat beatae, officia inventore quibusdam et adipisci suscipit ut ex unde architecto minus assumenda aspernatur atque.
  At in earum accusantium reprehenderit ipsa! Reprehenderit voluptates dignissimos quam! Ipsam numquam, aperiam facilis aspernatur iusto architecto quibusdam minus similique quas inventore voluptate id nobis hic consequuntur animi repellendus dicta."/>
  <Note />
  <Note content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nihil ipsa accusantium, expedita explicabo doloribus consectetur omnis pariatur eveniet necessitatibus deleniti perferendis ex blanditiis sit sequi velit doloremque? Nisi, alias?
  Perferendis, ab laudantium deleniti molestias cumque illum maiores amet minus ipsum quia, ipsam nostrum consequatur velit quod animi sit est facere assumenda ad porro sunt perspiciatis possimus, quibusdam eveniet. Numquam.
  Eaque cupiditate, molestiae animi ipsam, repellendus officia ipsa rem fugit fuga velit voluptatem nesciunt? Aspernatur, pariatur magni reprehenderit, officiis in unde doloribus est minus itaque numquam iure, adipisci perferendis facilis.
  Animi velit exercitationem saepe placeat quo soluta dolorem nulla dolores non, hic ab enim. Iure tempore maiores at repudiandae! Repellendus porro veniam possimus eaque hic minus quae accusantium debitis labore?
  Incidunt facilis aliquid temporibus harum maiores natus quas quidem, debitis nobis. Fugit reiciendis cupiditate nulla dolorum molestiae? Quidem animi adipisci quas expedita error minima corrupti. Culpa illum repellat eos veritatis.
  Cupiditate tenetur quo ratione laudantium dolore placeat aliquam sunt accusamus blanditiis similique excepturi eaque, nulla reiciendis in ullam quae recusandae ad quasi labore adipisci illo. Amet quod cum iusto consectetur?
  Animi asperiores debitis vel error voluptatibus rerum esse ducimus fugit odio tempora? Totam beatae corrupti voluptatibus asperiores, placeat corporis, cupiditate officiis doloremque numquam itaque minima. Incidunt quasi expedita rem nam.
  Consectetur quibusdam ratione voluptates quis porro minima adipisci nemo, praesentium magni. Incidunt, laudantium a vel saepe dignissimos repudiandae. In debitis veniam at quibusdam consectetur nobis? Nisi debitis eveniet ducimus consequuntur?
  Dolorem doloribus labore repudiandae quas ipsum sint tenetur! Odit vitae corporis nobis eius modi fugiat beatae, officia inventore quibusdam et adipisci suscipit ut ex unde architecto minus assumenda aspernatur atque.
  At in earum accusantium reprehenderit ipsa! Reprehenderit voluptates dignissimos quam! Ipsam numquam, aperiam facilis aspernatur iusto architecto quibusdam minus similique quas inventore voluptate id nobis hic consequuntur animi repellendus dicta."/>
  <Note />
  <Note />
  <Note content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nihil ipsa accusantium, expedita explicabo doloribus consectetur omnis pariatur eveniet necessitatibus deleniti perferendis ex blanditiis sit sequi velit doloremque? Nisi, alias?
  Perferendis, ab laudantium deleniti molestias cumque illum maiores amet minus ipsum quia, ipsam nostrum consequatur velit quod animi sit est facere assumenda ad porro sunt perspiciatis possimus, quibusdam eveniet. Numquam.
  Eaque cupiditate, molestiae animi ipsam, repellendus officia ipsa rem fugit fuga velit voluptatem nesciunt? Aspernatur, pariatur magni reprehenderit, officiis in unde doloribus est minus itaque numquam iure, adipisci perferendis facilis.
  Animi velit exercitationem saepe placeat quo soluta dolorem nulla dolores non, hic ab enim. Iure tempore maiores at repudiandae! Repellendus porro veniam possimus eaque hic minus quae accusantium debitis labore?
  Incidunt facilis aliquid temporibus harum maiores natus quas quidem, debitis nobis. Fugit reiciendis cupiditate nulla dolorum molestiae? Quidem animi adipisci quas expedita error minima corrupti. Culpa illum repellat eos veritatis.
  Cupiditate tenetur quo ratione laudantium dolore placeat aliquam sunt accusamus blanditiis similique excepturi eaque, nulla reiciendis in ullam quae recusandae ad quasi labore adipisci illo. Amet quod cum iusto consectetur?
  Animi asperiores debitis vel error voluptatibus rerum esse ducimus fugit odio tempora? Totam beatae corrupti voluptatibus asperiores, placeat corporis, cupiditate officiis doloremque numquam itaque minima. Incidunt quasi expedita rem nam.
  Consectetur quibusdam ratione voluptates quis porro minima adipisci nemo, praesentium magni. Incidunt, laudantium a vel saepe dignissimos repudiandae. In debitis veniam at quibusdam consectetur nobis? Nisi debitis eveniet ducimus consequuntur?
  Dolorem doloribus labore repudiandae quas ipsum sint tenetur! Odit vitae corporis nobis eius modi fugiat beatae, officia inventore quibusdam et adipisci suscipit ut ex unde architecto minus assumenda aspernatur atque.
  At in earum accusantium reprehenderit ipsa! Reprehenderit voluptates dignissimos quam! Ipsam numquam, aperiam facilis aspernatur iusto architecto quibusdam minus similique quas inventore voluptate id nobis hic consequuntur animi repellendus dicta."/>
  <Note content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nihil ipsa accusantium, expedita explicabo doloribus consectetur omnis pariatur eveniet necessitatibus deleniti perferendis ex blanditiis sit sequi velit doloremque? Nisi, alias?
  Perferendis, ab laudantium deleniti molestias cumque illum maiores amet minus ipsum quia, ipsam nostrum consequatur velit quod animi sit est facere assumenda ad porro sunt perspiciatis possimus, quibusdam eveniet. Numquam.
  Eaque cupiditate, molestiae animi ipsam, repellendus officia ipsa rem fugit fuga velit voluptatem nesciunt? Aspernatur, pariatur magni reprehenderit, officiis in unde doloribus est minus itaque numquam iure, adipisci perferendis facilis.
  Animi velit exercitationem saepe placeat quo soluta dolorem nulla dolores non, hic ab enim. Iure tempore maiores at repudiandae! Repellendus porro veniam possimus eaque hic minus quae accusantium debitis labore?
  Incidunt facilis aliquid temporibus harum maiores natus quas quidem, debitis nobis. Fugit reiciendis cupiditate nulla dolorum molestiae? Quidem animi adipisci quas expedita error minima corrupti. Culpa illum repellat eos veritatis.
  Cupiditate tenetur quo ratione laudantium dolore placeat aliquam sunt accusamus blanditiis similique excepturi eaque, nulla reiciendis in ullam quae recusandae ad quasi labore adipisci illo. Amet quod cum iusto consectetur?
  Animi asperiores debitis vel error voluptatibus rerum esse ducimus fugit odio tempora? Totam beatae corrupti voluptatibus asperiores, placeat corporis, cupiditate officiis doloremque numquam itaque minima. Incidunt quasi expedita rem nam.
  Consectetur quibusdam ratione voluptates quis porro minima adipisci nemo, praesentium magni. Incidunt, laudantium a vel saepe dignissimos repudiandae. In debitis veniam at quibusdam consectetur nobis? Nisi debitis eveniet ducimus consequuntur?
  Dolorem doloribus labore repudiandae quas ipsum sint tenetur! Odit vitae corporis nobis eius modi fugiat beatae, officia inventore quibusdam et adipisci suscipit ut ex unde architecto minus assumenda aspernatur atque.
  At in earum accusantium reprehenderit ipsa! Reprehenderit voluptates dignissimos quam! Ipsam numquam, aperiam facilis aspernatur iusto architecto quibusdam minus similique quas inventore voluptate id nobis hic consequuntur animi repellendus dicta."/>
</div>