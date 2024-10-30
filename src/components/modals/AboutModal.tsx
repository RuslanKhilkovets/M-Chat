import {ScrollView, StyleSheet, Text} from 'react-native';
import React from 'react';

import {Modal} from '@/components';
import {IModalProps} from '@/types';

const AboutModal = ({visible, onClose, openFrom}: IModalProps) => {
  return (
    <Modal
      visible={visible}
      onClose={onClose}
      title="About"
      openFrom={openFrom}>
      <ScrollView style={styles.container}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          praesentium nisi expedita libero dicta cumque quia veritatis quaerat
          dolores animi ducimus repellendus corrupti, illum ab molestias, quasi
          fuga aliquid eaque. Consectetur voluptatem odit quae officia minima a
          ipsum magni reiciendis ipsam facere minus, ea sequi quibusdam ducimus
          dicta fugit, soluta excepturi hic obcaecati, nisi molestias commodi
          impedit culpa numquam. Quasi! Ullam error blanditiis recusandae
          numquam vero nesciunt reprehenderit. Delectus labore dolores magni
          quaerat enim, dicta, hic possimus omnis explicabo voluptates ipsa
          fugit laboriosam fugiat laudantium impedit corporis illum quod
          repellendus. Consectetur aut veritatis facilis tempore eligendi iste
          quos omnis soluta sequi dolor dolore saepe ipsum necessitatibus
          reiciendis asperiores vel, officiis cupiditate vero molestias repellat
          in illo nobis dicta. Alias, eius? Nemo eligendi sed cum corporis
          adipisci. Minima obcaecati aspernatur placeat, maiores animi odio, ad
          ratione fuga libero ducimus cupiditate neque voluptates asperiores
          reiciendis nam soluta architecto ipsa! Voluptatum, pariatur qui. Velit
          culpa distinctio amet animi totam non qui debitis eos quidem possimus!
          Nesciunt id dicta expedita dolorum voluptate, voluptatem aut
          repellendus dolore. Architecto aspernatur magni at culpa excepturi,
          aperiam numquam? Earum culpa reiciendis totam qui ad, ex nihil sit est
          tempore possimus doloribus fugit aspernatur quo repellat aliquid
          cumque nemo tempora. Et ipsa optio quae officiis mollitia fugiat!
          Ducimus, beatae. Ratione eligendi quo itaque, sint iste distinctio
          dicta laboriosam veniam enim suscipit neque reprehenderit! Animi dolor
          itaque, commodi, sit, dicta vero pariatur eos consequatur modi
          doloribus reiciendis quos! Exercitationem, magnam. Commodi repudiandae
          voluptas ratione modi quae cumque totam. Quis nostrum saepe dicta
          vitae, voluptas, hic perferendis rem laborum nihil quas beatae neque
          ratione error incidunt ea natus dolorem labore. Repudiandae. Commodi,
          harum numquam. Maiores asperiores voluptatem, debitis eveniet illo
          eaque hic possimus totam vitae laborum alias. Laboriosam, consequatur.
          Temporibus perspiciatis nisi molestias fuga id, illum excepturi vitae
          facilis debitis ipsum.
        </Text>
      </ScrollView>
    </Modal>
  );
};

export default AboutModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    padding: 20,
    paddingBottom: 100,
    lineHeight: 22,
    fontSize: 18,
    fontFamily: 'Jersey20-Regular',
    color: '##E1FF00',
  },
});
